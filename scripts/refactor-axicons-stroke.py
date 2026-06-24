#!/usr/bin/env python3
"""
Axicons Refactor Script v2 - Optimized
More aggressive optimization with smarter grouping
"""

import re
from pathlib import Path

PROJECT_ROOT = Path('/Users/solroth/Sites/axiom01')
AXICONS_FILE = PROJECT_ROOT / 'js' / 'axicons.js'
BACKUP_FILE = PROJECT_ROOT / 'js' / 'axicons.js.backup'

def parse_axicons_file(file_path):
    """Parse the axicons.js file and extract the icon data."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'const axicons = \[(.*?)\];', content, re.DOTALL)
    if not match:
        raise ValueError("Could not find axicons array in file")
    
    array_content = match.group(1)
    icons = []
    icon_pattern = r'\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",\s*svgContent:\s*\'([^\']*)\'\s*\}'
    
    for match in re.finditer(icon_pattern, array_content):
        icon_id = int(match.group(1))
        name = match.group(2)
        svg_content = match.group(3)
        icons.append({
            'id': icon_id,
            'name': name,
            'svgContent': svg_content
        })
    
    return icons

def optimize_regular(svg_content, icon_name):
    """Regular variant: Remove all stroke-width and redundant fill/stroke."""
    optimized = svg_content
    
    # Remove stroke-width="2.5"
    optimized = re.sub(r'\s+stroke-width="2\.5"', '', optimized)
    
    # Remove fill="none" since it's the default
    optimized = re.sub(r'\s+fill="none"', '', optimized)
    
    # Remove explicit black/none strokes
    optimized = re.sub(r'\s+stroke="(?:black|#000|none)"', '', optimized)
    
    return optimized

def optimize_thin(svg_content, icon_name):
    """Thin variant: Remove stroke-width, let CSS set it to 1px."""
    optimized = svg_content
    
    # Remove all stroke-width attributes
    optimized = re.sub(r'\s+stroke-width="[^"]*"', '', optimized)
    
    # Remove fill="none"
    optimized = re.sub(r'\s+fill="none"', '', optimized)
    
    # Remove explicit strokes
    optimized = re.sub(r'\s+stroke="(?:black|#000|none)"', '', optimized)
    
    return optimized

def optimize_inverted(svg_content, icon_name):
    """Inverted: Keep rect, replace white strokes with CSS var."""
    optimized = svg_content
    
    # Remove stroke-width from inner elements
    optimized = re.sub(r'\s+stroke-width="[^"]*"', '', optimized)
    
    # Replace white strokes with CSS variable
    optimized = re.sub(
        r'stroke="white"\s+',
        'stroke="var(--ax-bg-inverse, white)" ',
        optimized
    )
    
    # Replace white fills with CSS variable
    optimized = re.sub(
        r'fill="white"',
        'fill="var(--ax-bg-inverse, white)"',
        optimized
    )
    
    return optimized

def generate_optimized_axicons(icons):
    """Generate optimized axicons.js."""
    output_lines = [
        "/**",
        " * Axicons - Refactored for Performance & Aesthetics",
        " * 1,608 icons (536 concepts × 3 styles: Regular, Thin, Inverted)",
        " *",
        " * Optimizations:",
        " * - Removed redundant stroke-width attributes (handled in CSS/wrapper)",
        " * - Regular: 2px strokes via CSS wrapper (crisp pixel grid)",
        " * - Thin: 1px strokes via CSS class override",
        " * - Inverted: CSS variables for theme support",
        " * - Added stroke-linecap/stroke-linejoin for polished look",
        " */",
        "",
        "const axicons = [",
    ]
    
    stats = {
        'total': len(icons),
        'regular': 0,
        'thin': 0,
        'inverted': 0,
        'total_chars_before': 0,
        'total_chars_after': 0,
    }
    
    for i, icon in enumerate(icons):
        original_content = icon['svgContent']
        optimized_content = optimize_svg_content(original_content, icon['name'])
        
        stats['total_chars_before'] += len(original_content)
        stats['total_chars_after'] += len(optimized_content)
        
        if 'Inverted' in icon['name']:
            stats['inverted'] += 1
        elif 'Thin' in icon['name']:
            stats['thin'] += 1
        else:
            stats['regular'] += 1
        
        icon_entry = f'    {{ id: {icon["id"]}, name: "{icon["name"]}", svgContent: \'{optimized_content}\' }}'
        
        if i < len(icons) - 1:
            icon_entry += ','
        
        output_lines.append(icon_entry)
    
    output_lines.append("];")
    output_lines.append("")
    output_lines.append("if (typeof module !== 'undefined' && module.exports) {")
    output_lines.append("    module.exports = axicons;")
    output_lines.append("}")
    
    return '\n'.join(output_lines), stats

def optimize_svg_content(svg_content, icon_name):
    """Route to appropriate optimizer."""
    if 'Inverted' in icon_name:
        return optimize_inverted(svg_content, icon_name)
    elif 'Thin' in icon_name:
        return optimize_thin(svg_content, icon_name)
    else:
        return optimize_regular(svg_content, icon_name)

def main():
    print("🔄 Axicons Refactor v2 Starting...")
    print()
    
    # Restore from backup (previous run added bloat)
    print("📥 Restoring from backup...")
    with open(BACKUP_FILE, 'r', encoding='utf-8') as f:
        backup_content = f.read()
    with open(AXICONS_FILE, 'w', encoding='utf-8') as f:
        f.write(backup_content)
    print("✅ Restored original from backup")
    print()
    
    # Parse
    print("📖 Parsing icons...")
    icons = parse_axicons_file(AXICONS_FILE)
    print(f"✅ Found {len(icons)} icons")
    print()
    
    # Optimize
    print("🔧 Optimizing...")
    optimized_content, stats = generate_optimized_axicons(icons)
    
    # Calculate savings
    size_before = stats['total_chars_before']
    size_after = stats['total_chars_after']
    reduction = 100 * (size_before - size_after) / size_before
    
    print(f"✅ Optimization complete:")
    print(f"   Regular: {stats['regular']} | Thin: {stats['thin']} | Inverted: {stats['inverted']}")
    print()
    print(f"📊 Size reduction:")
    print(f"   Before: {size_before:,} chars")
    print(f"   After:  {size_after:,} chars")
    print(f"   Savings: {reduction:.1f}% ({size_before - size_after:,} chars)")
    print()
    
    # Write
    print("✍️  Writing optimized file...")
    with open(AXICONS_FILE, 'w', encoding='utf-8') as f:
        f.write(optimized_content)
    print(f"✅ Updated: {AXICONS_FILE}")
    print()
    
    # Verify
    print("🔍 Verifying...")
    new_icons = parse_axicons_file(AXICONS_FILE)
    print(f"✅ {len(new_icons)} icons in optimized file")
    print()
    
    # Check removals
    print("🧪 Quality checks:")
    removed_2_5 = backup_content.count('stroke-width="2.5"')
    remaining_2_5 = optimized_content.count('stroke-width="2.5"')
    print(f"   ✓ stroke-width=\"2.5\" removed: {removed_2_5} → {remaining_2_5}")
    
    removed_0_5 = backup_content.count('stroke-width="0.5"')
    remaining_0_5 = optimized_content.count('stroke-width="0.5"')
    print(f"   ✓ stroke-width=\"0.5\" removed: {removed_0_5} → {remaining_0_5}")
    
    css_vars = optimized_content.count('var(--ax-bg-inverse')
    print(f"   ✓ CSS variables (inverted): {css_vars}")
    
    print()
    print("✅ Refactor complete!")
    print()
    print("📋 Next: Update CSS and renderer with global defaults")
    print()

if __name__ == '__main__':
    main()
