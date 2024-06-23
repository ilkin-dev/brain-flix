// createSingleComponent.js

const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
    console.error('Component name is required');
    process.exit(1);
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

// Create main component
createComponent(componentDir, componentName);
