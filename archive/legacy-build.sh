#!/bin/bash
# Axiom01 UI Framework Build Script
# This script validates and optimizes the codebase for release

echo "🚀 Starting Axiom01 build process..."

# Create release directory
RELEASE_DIR="./dist"
echo "📁 Creating release directory at $RELEASE_DIR"
mkdir -p $RELEASE_DIR
mkdir -p $RELEASE_DIR/css
mkdir -p $RELEASE_DIR/js
mkdir -p $RELEASE_DIR/img

# Clean existing files
echo "🧹 Cleaning previous build files..."
rm -rf $RELEASE_DIR/css/*
rm -rf $RELEASE_DIR/js/*
rm -rf $RELEASE_DIR/img/*

# Validate CSS files
echo "🔍 Validating CSS files..."
# For a real implementation, you would use a CSS validator
# We'll just check if the files exist
if [ ! -d "./css" ]; then
  echo "❌ CSS directory not found!"
  exit 1
fi

# Validate JavaScript files
echo "🔍 Validating JavaScript files..."
# For a real implementation, you would use ESLint
# We'll just check if the files exist
if [ ! -d "./js" ]; then
  echo "❌ JavaScript directory not found!"
  exit 1
fi

# Concatenate CSS files in correct order
echo "📦 Concatenating CSS files..."
cat css/_reset.css css/_axiom_reset.css css/axiom_vars.css css/colors_vars.css css/axiom_config.css css/colors.css css/axiom.css css/alerts.css css/site.css css/logo.css > $RELEASE_DIR/css/axiom.css

# Copy the individual CSS files as well (for modular usage)
echo "📁 Copying individual CSS files..."
cp css/*.css $RELEASE_DIR/css/

# If node and required packages are installed, minify CSS (commented out for now)
# echo "🔧 Minifying CSS..."
# if command -v npx &> /dev/null; then
#   npx clean-css-cli $RELEASE_DIR/css/axiom.css -o $RELEASE_DIR/css/axiom.min.css
# else
#   echo "⚠️ npx not found, skipping CSS minification"
#   # Create a simple minified version by removing comments and whitespace
#   cat $RELEASE_DIR/css/axiom.css | grep -v "^\s*/\*" | grep -v "^\s*\*" | grep -v "^\s*$" > $RELEASE_DIR/css/axiom.min.css
# fi

# For now, just copy the concatenated file as the "minified" version
cp $RELEASE_DIR/css/axiom.css $RELEASE_DIR/css/axiom.min.css

# Concatenate JavaScript files
echo "📦 Concatenating JavaScript files..."
cat js/scripts.js js/prism.js > $RELEASE_DIR/js/axiom.js

# Copy the individual JS files as well (for modular usage)
echo "📁 Copying individual JavaScript files..."
cp js/*.js $RELEASE_DIR/js/

# If node and required packages are installed, minify JS (commented out for now)
# echo "🔧 Minifying JavaScript..."
# if command -v npx &> /dev/null; then
#   npx terser $RELEASE_DIR/js/axiom.js -o $RELEASE_DIR/js/axiom.min.js
# else
#   echo "⚠️ npx not found, skipping JavaScript minification"
#   # Just copy the file as "minified" for now
#   cp $RELEASE_DIR/js/axiom.js $RELEASE_DIR/js/axiom.min.js
# fi

# For now, just copy the concatenated file as the "minified" version
cp $RELEASE_DIR/js/axiom.js $RELEASE_DIR/js/axiom.min.js

# Copy HTML file
echo "📋 Copying HTML files..."
cp index.html $RELEASE_DIR/
cp readme.md $RELEASE_DIR/README.md

# Copy image files
echo "🖼️ Copying image files..."
if [ -d "./img" ]; then
  cp -r img/* $RELEASE_DIR/img/
else
  echo "⚠️ Image directory not found, skipping"
  mkdir -p $RELEASE_DIR/img
fi

# Generate version file
echo "📝 Generating version information..."
VERSION=$(grep -o '"version": "[^"]*' package.json | cut -d'"' -f4)
echo "Axiom01 UI Framework v$VERSION" > $RELEASE_DIR/version.txt
echo "Build date: $(date)" >> $RELEASE_DIR/version.txt

echo "✅ Build completed! Files are ready in the $RELEASE_DIR directory."
echo ""
echo "📄 To use in production, add these to your HTML:"
echo "<link rel='stylesheet' href='css/axiom.min.css'>"
echo "<script src='js/axiom.min.js'></script>"
echo ""
echo "📦 To publish to npm, run: npm publish"
echo "🌐 To deploy to GitHub Pages, push the dist directory to the gh-pages branch"