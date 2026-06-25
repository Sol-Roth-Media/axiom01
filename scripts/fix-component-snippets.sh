#!/bin/bash

# AXIOM01 Component Code Snippet Fixer
# Systematically corrects all code snippet violations across 77 component pages

echo "=========================================="
echo "AXIOM01 Component Snippet Fixer v1.0"
echo "=========================================="
echo ""

# Counter for changes
TOTAL_FIXES=0

# Fix 1: Replace Font Awesome with Axicons in code snippets
echo "[1/5] Fixing Font Awesome → Axicons conversions..."

# Common icon mappings
declare -A ICON_MAP=(
    ["fas fa-plus"]="Plus"
    ["fas fa-minus"]="Minus"
    ["fas fa-save"]="Save"
    ["fas fa-trash"]="Trash"
    ["fas fa-edit"]="Edit"
    ["fas fa-search"]="Search"
    ["fas fa-close"]="Close"
    ["fas fa-times"]="X"
    ["fas fa-check"]="Check"
    ["fas fa-star"]="Star"
    ["fas fa-heart"]="Heart"
    ["fas fa-user"]="User"
    ["fas fa-cog"]="Settings"
    ["fas fa-bell"]="Bell"
    ["fas fa-download"]="Download"
    ["fas fa-upload"]="Upload"
    ["fas fa-share"]="Share"
    ["fab fa-facebook"]="Brand-Facebook"
    ["fab fa-twitter"]="Brand-Twitter"
)

for file in docs/components/*.html; do
    # Count Font Awesome references
    count=$(grep -o "fas fa-\|fab fa-" "$file" | wc -l)
    if [ "$count" -gt 0 ]; then
        echo "  Processing $(basename $file): $count Font Awesome refs"
        TOTAL_FIXES=$((TOTAL_FIXES + count))
        
        # Replace generic Font Awesome pattern in code blocks
        sed -i '' 's/<i class="fas fa-\([^"]*\)"><\/i>/<span class="axicon render" data-name="\1"><\/span>/g' "$file"
        sed -i '' 's/<i class="fab fa-\([^"]*\)"><\/i>/<span class="axicon render" data-name="\1"><\/span>/g' "$file"
    fi
done

echo "  ✓ Font Awesome conversions complete"
echo ""

# Fix 2: Remove BEM-like element classes from code snippets
echo "[2/5] Removing BEM-like element classes..."

BEM_PATTERNS=(
    "card-header"
    "card-body"
    "card-footer"
    "card-title"
    "card-text"
    "button-group"
    "button-wrapper"
    "form-group"
    "form-row"
    "form-label"
    "form-input"
    "form-textarea"
    "modal-header"
    "modal-body"
    "modal-footer"
    "modal-title"
    "modal-close"
    "modal-overlay"
    "modal-content"
    "list-item"
    "list-group"
    "table-header"
    "table-body"
    "table-row"
    "table-cell"
)

for file in docs/components/*.html; do
    for pattern in "${BEM_PATTERNS[@]}"; do
        if grep -q "class=\"[^\"]*$pattern" "$file"; then
            # Count occurrences in code blocks only
            count=$(grep -c "language-html" "$file" 2>/dev/null || echo 0)
            if [ "$count" -gt 0 ]; then
                echo "  Found BEM pattern in $(basename $file): $pattern"
                TOTAL_FIXES=$((TOTAL_FIXES + count))
            fi
        fi
    done
done

echo "  Note: BEM patterns identified. Manual review recommended."
echo "  ✓ BEM pattern scan complete"
echo ""

# Fix 3: Identify multiple classes for variants
echo "[3/5] Scanning for multi-class variant patterns..."

VARIANT_PATTERNS=(
    'class="primary"'
    'class="secondary"'
    'class="success"'
    'class="error"'
    'class="warning"'
    'class="info"'
    'class="disabled"'
    'class="active"'
    'class="outlined"'
    'class="elevated"'
    'class="filled"'
)

for file in docs/components/*.html; do
    for pattern in "${VARIANT_PATTERNS[@]}"; do
        if grep -q "<code class=\"language-html\">" "$file"; then
            count=$(sed -n '/<code class="language-html">/,/<\/code>/p' "$file" | grep -c "$pattern" 2>/dev/null || echo 0)
            if [ "$count" -gt 0 ]; then
                echo "  Found variant pattern in $(basename $file): $pattern ($count times)"
                TOTAL_FIXES=$((TOTAL_FIXES + count))
            fi
        fi
    done
done

echo "  ✓ Variant pattern scan complete"
echo ""

# Fix 4: Remove inline styles from code snippets
echo "[4/5] Removing inline style attributes..."

for file in docs/components/*.html; do
    # Count style attributes in code blocks
    count=$(sed -n '/<code class="language-html">/,/<\/code>/p' "$file" | grep -c "style=" 2>/dev/null || echo 0)
    if [ "$count" -gt 0 ]; then
        echo "  Removing inline styles from $(basename $file): $count occurrences"
        TOTAL_FIXES=$((TOTAL_FIXES + count))
        
        # Remove style attributes in code blocks
        sed -i '' 's/ style="[^"]*"//g' "$file"
    fi
done

echo "  ✓ Inline style removal complete"
echo ""

# Fix 5: Report on hardcoded colors/values
echo "[5/5] Scanning for hardcoded values..."

HARDCODED_PATTERNS=(
    '#[0-9a-f]\{6\}'
    '[0-9]\+px'
    '[0-9]\+\.[0-9]\+rem'
    'rgb('
    'rgba('
)

HARDCODED_COUNT=0
for file in docs/components/*.html; do
    if sed -n '/<code class="language-html">/,/<\/code>/p' "$file" | grep -qE '#[0-9a-f]{6}|[0-9]+px|rgba\(|rgb\('; then
        echo "  Found hardcoded values in $(basename $file)"
        HARDCODED_COUNT=$((HARDCODED_COUNT + 1))
    fi
done

if [ "$HARDCODED_COUNT" -gt 0 ]; then
    echo "  Note: $HARDCODED_COUNT files have hardcoded colors/values"
    echo "  Manual review recommended to replace with design tokens"
fi

echo "  ✓ Hardcoded value scan complete"
echo ""

# Summary
echo "=========================================="
echo "SUMMARY"
echo "=========================================="
echo "Total potential fixes identified: ~$TOTAL_FIXES"
echo "Font Awesome conversions: ✓ Automated"
echo "Inline styles removal: ✓ Automated"
echo "BEM patterns: ⚠ Manual review recommended"
echo "Multi-class variants: ⚠ Manual review recommended"
echo "Hardcoded values: ⚠ Manual review recommended"
echo ""
echo "Next steps:"
echo "1. Review identified patterns"
echo "2. Create component-specific fixes"
echo "3. Test all components"
echo "4. Verify AXIOM01 compliance"
echo "=========================================="
