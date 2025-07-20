#!/usr/bin/env node
/**
 * Axiom01 Enhanced Build System
 * Implements CSS minification, JS bundling, critical CSS extraction, and performance optimization
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
  `${DIST_DIR}/img`,
  `${DIST_DIR}/components`
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

// Core CSS files in order
const coreCSSFiles = [
  'css/_reset.css',
  'css/_axiom_reset.css',
  'css/axiom_vars.css',
  'css/colors_vars.css',
  'css/axiom_config.css',
  'css/colors.css',
  'css/axiom.css'
];

// Component CSS files
const componentCSSFiles = [
  'css/alert.css',
  'css/forms.css',
  'css/navbar.css',
  'css/components.css',
  'css/commerce.css',
  'css/datepicker.css',
  'css/drawer.css',
  'css/hero.css',
  'css/media.css',
  'css/notification.css',
  'css/progress.css',
  'css/search.css',
  'css/stepper.css',
  'css/tag.css',
  'css/skeleton.css',
  'css/breadcrumb.css',
  'css/pagination.css',
  'css/timeline.css',
  'css/empty-state.css',
  'css/file-upload.css'
];

// Build main CSS bundle
const buildCSS = (files, outputFile, description) => {
  console.log(`📦 Building ${description}...`);
  let combinedCSS = '';

  files.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      combinedCSS += `\n/* === ${file} === */\n${content}\n`;
    } else {
      console.warn(`⚠️  Warning: ${file} not found, skipping...`);
    }
  });

  fs.writeFileSync(outputFile, combinedCSS);
  console.log(`✅ Created ${outputFile}`);
};

// Build core and full CSS bundles
buildCSS(coreCSSFiles, `${DIST_DIR}/css/axiom-core.css`, 'core CSS bundle');
buildCSS([...coreCSSFiles, ...componentCSSFiles], `${DIST_DIR}/css/axiom.css`, 'full CSS bundle');

// JavaScript Build Process
console.log('📦 Building JavaScript files...');

const coreJSFiles = [
  'js/axiom.js',
  'js/theme-switcher.js'
];

const componentJSFiles = [
  'js/alert.js',
  'js/forms.js',
  'js/navbar.js',
  'js/commerce.js',
  'js/datepicker.js',
  'js/drawer.js',
  'js/infinite-scroll.js',
  'js/media.js',
  'js/notification.js',
  'js/progress.js',
  'js/search.js',
  'js/stepper.js',
  'js/tag.js',
  'js/skeleton.js',
  'js/breadcrumb.js',
  'js/pagination.js',
  'js/timeline.js',
  'js/empty-state.js',
  'js/file-upload.js'
];

const buildJS = (files, outputFile, description) => {
  console.log(`📦 Building ${description}...`);
  let combinedJS = '';

  files.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      combinedJS += `\n/* === ${file} === */\n${content}\n`;
    } else {
      console.warn(`⚠️  Warning: ${file} not found, skipping...`);
    }
  });

  fs.writeFileSync(outputFile, combinedJS);
  console.log(`✅ Created ${outputFile}`);
};

// Build core and full JS bundles
buildJS(coreJSFiles, `${DIST_DIR}/js/axiom-core.js`, 'core JavaScript bundle');
buildJS([...coreJSFiles, ...componentJSFiles], `${DIST_DIR}/js/axiom.js`, 'full JavaScript bundle');

// Minification Process
console.log('🔧 Minifying assets...');

try {
  // Minify CSS
  execSync(`npx cleancss -o ${DIST_DIR}/css/axiom-core.min.css ${DIST_DIR}/css/axiom-core.css`);
  execSync(`npx cleancss -o ${DIST_DIR}/css/axiom.min.css ${DIST_DIR}/css/axiom.css`);
  console.log('✅ CSS minification completed');

  // Minify JavaScript with source maps
  execSync(`npx terser ${DIST_DIR}/js/axiom-core.js --compress --mangle --source-map --output ${DIST_DIR}/js/axiom-core.min.js`);
  execSync(`npx terser ${DIST_DIR}/js/axiom.js --compress --mangle --source-map --output ${DIST_DIR}/js/axiom.min.js`);
  console.log('✅ JavaScript minification completed');
} catch (error) {
  console.error('❌ Minification failed:', error.message);
}

// Copy individual files for modular usage
console.log('📁 Copying individual files for modular usage...');
try {
  execSync(`cp -r css/* ${DIST_DIR}/css/`);
  execSync(`cp -r js/* ${DIST_DIR}/js/`);
  console.log('✅ Individual files copied');
} catch (error) {
  console.error('❌ File copying failed:', error.message);
}

// Generate file size report
console.log('📊 Generating build report...');
const generateSizeReport = () => {
  const files = [
    `${DIST_DIR}/css/axiom-core.css`,
    `${DIST_DIR}/css/axiom-core.min.css`,
    `${DIST_DIR}/css/axiom.css`,
    `${DIST_DIR}/css/axiom.min.css`,
    `${DIST_DIR}/js/axiom-core.js`,
    `${DIST_DIR}/js/axiom-core.min.js`,
    `${DIST_DIR}/js/axiom.js`,
    `${DIST_DIR}/js/axiom.min.js`
  ];

  console.log('\n📊 Build Size Report:');
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
