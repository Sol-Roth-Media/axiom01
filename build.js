#!/usr/bin/env node
/**
 * Axiom01 Enhanced Build System
 * Implements CSS minification, JS bundling, and performance optimization
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Axiom01 enhanced build process...');

// Create directories
const DIST_DIR = './dist';
const dirs = [
  `${DIST_DIR}`,
  `${DIST_DIR}/css`,
  `${DIST_DIR}/js`,
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
});

// Clean previous builds
console.log('🧹 Cleaning previous build files...');
try {
  execSync(`rm -rf ${DIST_DIR}/css/* ${DIST_DIR}/js/*`);
} catch (e) {
  // Directory might be empty, continue
}

// CSS Build Process
console.log('📦 Building CSS files...');

try {
  // Process axiom.css (full bundle)
  execSync(`npx cleancss -o ${DIST_DIR}/css/axiom.css css/axiom.css`);
  execSync(`npx cleancss -o ${DIST_DIR}/css/axiom.min.css css/axiom.css`);

  // Process core.css (core bundle)
  execSync(`npx cleancss -o ${DIST_DIR}/css/core.css css/core.css`);
  execSync(`npx cleancss -o ${DIST_DIR}/css/core.min.css css/core.css`);

  console.log('✅ CSS bundles created and minified');
} catch (error) {
  console.error('❌ CSS build failed:', error.message);
  process.exit(1);
}

// JavaScript Build Process
console.log('📦 Building JavaScript files...');

const jsFiles = ['js/axiom.js', ...fs.readdirSync('js').filter(file => file.endsWith('.js') && file !== 'axiom.js').map(file => `js/${file}`)];

const buildJS = (files, outputFile, description) => {
  console.log(`📦 Building ${description}...`);
  let combinedJS = '';

  files.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      combinedJS += `
/* === ${file} === */
${content}
`;
    } else {
      console.warn(`⚠️  Warning: ${file} not found, skipping...`);
    }
  });

  fs.writeFileSync(outputFile, combinedJS);
  console.log(`✅ Created ${outputFile}`);
};

// Build full and core JS bundles
buildJS(jsFiles, `${DIST_DIR}/js/axiom.js`, 'full JavaScript bundle');
buildJS(['js/axiom.js', 'js/theme-switcher.js'], `${DIST_DIR}/js/axiom-core.js`, 'core JavaScript bundle');

// Minify JavaScript
try {
  execSync(`npx terser ${DIST_DIR}/js/axiom.js --compress --mangle --source-map --output ${DIST_DIR}/js/axiom.min.js`);
  execSync(`npx terser ${DIST_DIR}/js/axiom-core.js --compress --mangle --source-map --output ${DIST_DIR}/js/axiom-core.min.js`);
  console.log('✅ JavaScript minification completed');
} catch (error) {
  console.error('❌ JavaScript minification failed:', error.message);
  process.exit(1);
}

// Generate file size report
console.log('📊 Generating build report...');
const generateSizeReport = () => {
  const files = [
    `${DIST_DIR}/css/axiom.css`,
    `${DIST_DIR}/css/axiom.min.css`,
    `${DIST_DIR}/css/core.css`,
    `${DIST_DIR}/css/core.min.css`,
    `${DIST_DIR}/js/axiom.js`,
    `${DIST_DIR}/js/axiom.min.js`,
    `${DIST_DIR}/js/axiom-core.js`,
    `${DIST_DIR}/js/axiom-core.min.js`,
  ];

  console.log('📊 Build Size Report:');
  console.log('━'.repeat(50));

  files.forEach(file => {
    if (fs.existsSync(file)) {
      const stats = fs.statSync(file);
      const size = (stats.size / 1024).toFixed(2);
      console.log(`${path.basename(file).padEnd(25)} ${size.padStart(8)} KB`);
    }
  });
  console.log('━'.repeat(50));
};

generateSizeReport();

console.log('✅ Axiom01 build completed successfully!');
console.log('🎯 Next steps: Run `npm run lighthouse` for performance analysis');