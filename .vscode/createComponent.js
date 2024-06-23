// .vscode/createComponent.js

const fs = require('fs');
const path = require('path');

const createComponent = (folderName, componentName) => {
  const rootDir = path.resolve(__dirname, '..'); // Resolve the absolute path to the project root
  const baseDir = path.join(rootDir, 'src', 'components'); // Adjust the base directory as per your project structure

  // Determine component directory
  let componentDir = baseDir;
  if (folderName) {
    componentDir = path.join(baseDir, folderName);
    // Create the folder if it doesn't exist
    if (!fs.existsSync(componentDir)) {
      fs.mkdirSync(componentDir, { recursive: true });
    }
  }

  // Create component files
  const componentJSPath = path.join(componentDir, `${componentName}.js`);
  const componentSCSSPath = path.join(componentDir, `${componentName}.scss`);

  createFile(componentJSPath, generateJSContent(componentName));
  createFile(componentSCSSPath, generateSCSSContent(componentName));

  console.log(`Component ${componentName} created successfully${folderName ? ` in folder ${folderName}` : ''}.`);
};

const createFile = (filePath, content) => {
  fs.writeFileSync(filePath, content, 'utf8');
};

const generateJSContent = (componentName) => {
  return `import React from 'react';
import './${componentName}.scss';

const ${componentName} = () => {
  return (
    <div className="${componentName}">
      {/* Your component code */}
    </div>
  );
};

export default ${componentName};
`;
};

const generateSCSSContent = (componentName) => {
  return `.${componentName} {
  /* Your component styles */
}
`;
};

// Extract folderName and componentName from command line arguments
const [, , folderName, componentName] = process.argv;

if (!folderName || !componentName) {
  console.error('Folder name and component name are required.');
  process.exit(1);
}

createComponent(folderName, componentName);
