#!/bin/bash

# Axiom01 Framework Sync Script
# Keeps the Drupal 11 dbase theme in sync with the main axiom01 repo
# Run this after any changes to CSS or documentation

set -e

AXIOM01_ROOT="/Users/solroth/Sites/axiom01"
DBASE_THEME="/Users/solroth/Sites/dbase/web/themes/custom/axiom01"

echo "═══════════════════════════════════════════════════════════════════"
echo "Syncing Axiom01 Framework to Drupal 11 Theme"
echo "═══════════════════════════════════════════════════════════════════"

# Copy CSS files
echo ""
echo "Copying CSS files..."
cp "$AXIOM01_ROOT/css/_variables.css" "$DBASE_THEME/css/_variables.css"
cp "$AXIOM01_ROOT/css/_animations.css" "$DBASE_THEME/css/_animations.css"
cp "$AXIOM01_ROOT/css/_utilities.css" "$DBASE_THEME/css/_utilities.css"
cp "$AXIOM01_ROOT/css/_components.css" "$DBASE_THEME/css/_components.css"
cp "$AXIOM01_ROOT/css/axiom.css" "$DBASE_THEME/css/axiom.css"
cp "$AXIOM01_ROOT/css/axiom_config.css" "$DBASE_THEME/css/axiom_config.css"
echo "✓ CSS files synced"

# Copy documentation files
echo ""
echo "Copying documentation files..."
cp "$AXIOM01_ROOT/README.md" "$DBASE_THEME/README.md"
cp "$AXIOM01_ROOT/CHANGELOG.md" "$DBASE_THEME/CHANGELOG.md"
cp "$AXIOM01_ROOT/RELEASE_NOTES.md" "$DBASE_THEME/RELEASE_NOTES.md"
cp "$AXIOM01_ROOT/AXIOM01_STYLING_GUIDE.md" "$DBASE_THEME/AXIOM01_STYLING_GUIDE.md"
echo "✓ Documentation files synced"

# Copy docs directory
echo ""
echo "Copying docs directory..."
rm -rf "$DBASE_THEME/docs"
cp -r "$AXIOM01_ROOT/docs" "$DBASE_THEME/docs"
echo "✓ Docs directory synced"

# Create minified version
echo ""
echo "Building minified CSS..."
python3 << 'PYTHON'
import re
import sys

axiom_root = "/Users/solroth/Sites/axiom01"
files = [
    'css/axiom.css',
    'css/_variables.css',
    'css/_animations.css',
    'css/_utilities.css',
    'css/_components.css'
]

combined = ''
for f in files:
    with open(f"{axiom_root}/{f}", 'r') as file:
        combined += file.read() + '\n'

# Basic minification
minified = combined
minified = re.sub(r'/\*[\s\S]*?\*/', '', minified)
minified = re.sub(r'//.*?\n', '\n', minified)
minified = re.sub(r'\s+', ' ', minified)
minified = re.sub(r'\s*([{}:;,>+~])\s*', r'\1', minified)
minified = minified.strip()

dbase_dist = "/Users/solroth/Sites/dbase/web/themes/custom/axiom01/dist/css/axiom.min.css"
with open(dbase_dist, 'w') as f:
    f.write(minified)

print(f"✓ Minified axiom.min.css ({len(minified)} bytes)")
PYTHON

echo ""
echo "═══════════════════════════════════════════════════════════════════"
echo "✅ Sync Complete!"
echo "═══════════════════════════════════════════════════════════════════"
echo ""
echo "Next steps:"
echo "1. Test in the Drupal theme"
echo "2. Run any Drupal asset compilation if needed"
echo "3. Clear caches in Drupal admin"
echo "4. Commit changes in both repositories"
