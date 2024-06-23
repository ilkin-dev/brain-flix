// .vscode/createComponent.js

const fs = require('fs');
const path = require('path');

const createComponent = (folderName, componentName) => {
  const rootDir = path.resolve(__dirname, '..'); // Resolve the absolute path to the project root
  const baseDir = path.join(rootDir, 'src', 'components'); // Adjust the base directory as per your project structure

  // Ensure folderName and componentName are provided
  if (!folderName || !componentName) {
    console.error('Folder name and component name are required.');
    process.exit(1);
  }

  // Determine component directory
  let componentDir;
  if (folderName === 'components') {
    componentDir = baseDir; // Use baseDir directly if folderName is 'components'
  } else {
    componentDir = path.join(baseDir, folderName); // Otherwise, create inside baseDir/folderName
  }

  // Create the folder if it doesn't exist
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }

  // Create component folder with componentName inside componentDir
  const finalComponentDir = path.join(componentDir, componentName);
  if (!fs.existsSync(finalComponentDir)) {
    fs.mkdirSync(finalComponentDir);
  }

  // Create component files inside finalComponentDir
  const componentJSPath = path.join(finalComponentDir, `${componentName}.js`);
  const componentSCSSPath = path.join(finalComponentDir, `${componentName}.scss`);

  createFile(componentJSPath, generateJSContent(componentName));
  createFile(componentSCSSPath, generateCSSContent(componentName));

  console.log(`Component ${componentName} created successfully in folder ${folderName}.`);
};

const createFile = (filePath, content) => {
  fs.writeFileSync(filePath, content, 'utf8');
};

const generateJSContent = (componentName) => {
  return `import React from 'react';
import './${componentName}.css';

const ${componentName} = () => {
  return (
    <div className="${componentName.toLowerCase()}">
      {/* Your component code */}
    </div>
  );
};

export default ${componentName};
`;
};

const generateCSSContent = (componentName) => {
  return `.${componentName.toLowerCase()} {
}
`;
};

// Extract folderName and componentName from command line arguments
const [, , folderName, componentName] = process.argv;

createComponent(folderName, componentName);
