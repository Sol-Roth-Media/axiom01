const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
    console.error('Please provide a component name: node scripts/create-component.js <component-name>');
    process.exit(1);
}

const componentDir = path.join(__dirname, '..', 'components');
const jsDir = path.join(__dirname, '..', 'js');
const dataDir = path.join(__dirname, '..', 'data');
const componentsJsonPath = path.join(dataDir, 'components.json');

const htmlContent = `<!-- components/${componentName}.html -->
<div class="component-container">
    <header class="component-header">
        <h2>${componentName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Component</h2>
        <p>This is a basic ${componentName} component.</p>
    </header>
    <div class="component-example">
        <!-- Your component HTML goes here -->
        <p>Hello from ${componentName}!</p>
    </div>
    <div class="component-code">
        <h3>HTML</h3>
        <pre><code class="language-html">&lt;!-- Your component HTML goes here --&gt;</code></pre>
        <h3>JavaScript</h3>
        <pre><code class="language-javascript">// Your component JavaScript goes here (if any)</code></pre>
    </div>
</div>`;

const jsContent = `// js/${componentName}.js
const ${componentName.replace(/-/g, '')} = {
    init: function(element) {
        console.log('${componentName} component initialized on', element);
        // Add your component logic here
    }
};

export default ${componentName.replace(/-/g, '')};`;

const componentEntry = {
    name: componentName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    src: `components/${componentName}.html`,
    category: "General" // Default category, can be changed manually
};

async function createComponent() {
    try {
        // Create HTML file
        const htmlFilePath = path.join(componentDir, `${componentName}.html`);
        fs.writeFileSync(htmlFilePath, htmlContent.trim());
        console.log(`Created: ${htmlFilePath}`);

        // Create JS file
        const jsFilePath = path.join(jsDir, `${componentName}.js`);
        fs.writeFileSync(jsFilePath, jsContent.trim());
        console.log(`Created: ${jsFilePath}`);

        // Update components.json
        let components = [];
        if (fs.existsSync(componentsJsonPath)) {
            const data = fs.readFileSync(componentsJsonPath, 'utf8');
            components = JSON.parse(data);
        }
        components.push(componentEntry);
        fs.writeFileSync(componentsJsonPath, JSON.stringify(components, null, 4));
        console.log(`Updated: ${componentsJsonPath}`);

        console.log(`
Component '${componentName}' created successfully!`);
        console.log('Remember to add any specific CSS to css/axiom.css or a dedicated component CSS file.');

    } catch (error) {
        console.error('Error creating component:', error);
    }
}

createComponent();
