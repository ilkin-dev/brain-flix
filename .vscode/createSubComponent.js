// createSubcomponent.js

const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
const subcomponentName = process.argv[3];

if (!componentName || !subcomponentName) {
    console.error('Component name and subcomponent name are required');
    process.exit(1);
}

// Directory for the component
const componentDir = path.join(__dirname, 'src', 'components', componentName);

const createFile = (filePath, content) => {
    fs.writeFileSync(filePath, content, 'utf8');
};

const createSubcomponent = (dir, parentName, name) => {
    const componentDir = path.join(dir, parentName, 'components', name);
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
      {/* Your subcomponent code */}
    </div>
  );
};

export default ${name};
`
    );

    createFile(
        path.join(componentDir, parentName, 'components', `${name}.scss`),
        `.${name} {
  /* Your subcomponent styles */
}
`
    );

    console.log(`Subcomponent ${name} created successfully for component ${parentName}.`);
};

// Create subcomponent
createSubcomponent(componentDir, componentName, subcomponentName);
