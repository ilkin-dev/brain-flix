const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
if (!componentName) {
    console.error('Component name is required');
    process.exit(1);
}

const componentDir = path.join(__dirname, '..', 'src', 'components', componentName);

if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
}

const jsContent = `import React from 'react';
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

const scssContent = `.${componentName} {
  /* Your styles */
}
`;

fs.writeFileSync(path.join(componentDir, `${componentName}.js`), jsContent);
fs.writeFileSync(path.join(componentDir, `${componentName}.scss`), scssContent);

console.log(`Component ${componentName} created successfully.`);
