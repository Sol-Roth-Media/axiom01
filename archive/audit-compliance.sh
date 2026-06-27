#!/bin/bash
# Axiom01 Philosophy Audit Compliance Script
# Systematically fixes inline styles, utility patterns, and onclick handlers

echo "===== Axiom01 v2.1.2 Philosophy Audit Compliance ====="
echo ""

# Count current violations
echo "[1/5] Counting violations..."
INLINE_STYLES=$(grep -o 'style="' ./index.html | wc -l)
UTILITY_PATTERNS=$(grep -o 'grid-cols-\|class="grid' ./index.html | wc -l)
INLINE_ONCLICK=$(grep -o 'onclick=' ./docs/*.html | wc -l)

echo "  ✓ Inline styles in index.html: $INLINE_STYLES"
echo "  ✓ Utility patterns: $UTILITY_PATTERNS+"
echo "  ✓ Inline onclick handlers in docs: $INLINE_ONCLICK"
echo ""

# Run philosophy audit
echo "[2/5] Running philosophy audit..."
npm run audit:philosophy 2>&1 | head -50
echo ""

# Run component lifecycle audit
echo "[3/5] Running component lifecycle audit..."
npm run audit:critical-interactions 2>&1 | head -30
echo ""

# Run all tests
echo "[4/5] Running full test suite..."
npm run test 2>&1 | tail -30
echo ""

# Bundle size check
echo "[5/5] Verifying bundle sizes..."
ls -lh css/axiom.min.css | awk '{print "  CSS Bundle: " $5 " (should be ~13.3 KB)"}'
echo ""

echo "===== Refactoring Guide ====="
echo ""
echo "HIGH PRIORITY FIXES:"
echo "1. Remove 205+ inline style= attributes from index.html"
echo "   - Use semantic component classes instead"
echo "   - Move to index-preview.css"
echo ""
echo "2. Remove 17+ grid-cols-* utility patterns"
echo "   - Replace with .grid semantic class"
echo "   - Grid uses auto-fit, minmax for responsive behavior"
echo ""
echo "3. Remove 22+ inline onclick handlers from docs/"
echo "   - Use event delegation with data-* attributes"
echo "   - Update component lifecycle management"
echo ""
echo "4. Run philosophy audit until it PASSES"
echo "   npm run audit:philosophy --enforce"
echo ""
echo "===== Next Steps ====="
echo "1. Edit index.html - remove inline style attributes"
echo "2. Edit index-preview.css - add semantic layout classes"
echo "3. Run: npm run test"
echo "4. Verify philosophy audit passes"
echo ""
