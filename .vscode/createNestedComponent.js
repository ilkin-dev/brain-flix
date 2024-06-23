// createNestedComponents.js

const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
const componentsData = process.argv[3];

if (!componentName) {
    console.error('Component name is required');
    process.exit(1);
}

let components = {};
if (componentsData) {
    try {
        components = JSON.parse(componentsData);
    } catch (error) {
        console.error('Invalid JSON format for components');
        process.exit(1);
    }
}

// Base directory for the component
const componentDir = path.join(__dirname, 'src', 'components', componentName);

const createFile = (filePath, content) => {
    fs.writeFileSync(filePath, content, 'utf8');
};

const createComponent = (dir, name) => {
    const componentDir = path.join(dir, name);
    if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir, { recursive: true });
    }

    createFile(
        path.join(componentDir, `${name}.js`),
        `import React from 'react';
import './${name}.scss';

const ${name} = () => {
  return (
    <div className="${name}">
      {/* Your component code */}
    </div>
  );
};

export default ${name};
`
    );

    createFile(
        path.join(componentDir, `${name}.scss`),
        `.${name} {
  /* Your styles */
}
`
    );

    console.log(`Component ${name} created successfully.`);
};

const createNestedComponents = (dir, components) => {
    Object.entries(components).forEach(([name, nestedComponents]) => {
        createComponent(dir, name);
        if (typeof nestedComponents === 'object' && Object.keys(nestedComponents).length > 0) {
            createNestedComponents(path.join(dir, name), nestedComponents);
        }
    });
};

// Create main component
createComponent(componentDir, componentName);

// Create nested components
createNestedComponents(componentDir, components);
