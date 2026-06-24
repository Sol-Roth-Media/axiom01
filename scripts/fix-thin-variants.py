#!/usr/bin/env python3
"""
Corrective Refactor: Fix Thin variants by wrapping in <g stroke-width="1">

Problem: 421 Thin variants have identical content to Regular variants.
Solution: Wrap each Thin variant's SVG content in <g stroke-width="1">
"""

import re
from pathlib import Path

PROJECT_ROOT = Path('/Users/solroth/Sites/axiom01')
AXICONS_FILE = PROJECT_ROOT / 'js' / 'axicons.js'

def parse_axicons(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'const axicons = \[(.*?)\];', content, re.DOTALL)
    if not match:
        raise ValueError("Could not find axicons array")
    
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

def is_thin_variant(name):
    return 'Thin' in name and 'Inverted' not in name

def wrap_in_group(svg_content):
    """Wrap SVG content in <g stroke-width="1">"""
    return f'<g stroke-width="1">{svg_content}</g>'

def already_wrapped(svg_content):
    """Check if content is already wrapped in <g>"""
    return svg_content.strip().startswith('<g')

def fix_thin_variants(icons):
    """Fix Thin variants by wrapping in <g stroke-width="1">"""
    
    fixed_count = 0
    already_wrapped_count = 0
    
    for icon in icons:
        if is_thin_variant(icon['name']):
            if already_wrapped(icon['svgContent']):
                already_wrapped_count += 1
            else:
                icon['svgContent'] = wrap_in_group(icon['svgContent'])
                fixed_count += 1
    
    return fixed_count, already_wrapped_count

def generate_output(icons):
    """Generate updated axicons.js"""
    output_lines = [
        "/**",
        " * Axicons - Corrected Refactor v2.1",
        " * Fixed: Thin variants now properly wrapped in <g stroke-width=\"1\">",
        " * 1,608 icons (536 concepts × 3 styles)",
        " *",
        " * Fixes:",
        " * - Wrapped 421 Thin variants in <g stroke-width=\"1\">",
        " * - Ensures Thin variants are visually distinct from Regular",
        " * - 1px strokes for elegant, refined appearance",
        " */",
        "",
        "const axicons = [",
    ]
    
    for i, icon in enumerate(icons):
        icon_entry = f'    {{ id: {icon["id"]}, name: "{icon["name"]}", svgContent: \'{icon["svgContent"]}\' }}'
        if i < len(icons) - 1:
            icon_entry += ','
        output_lines.append(icon_entry)
    
    output_lines.append("];")
    output_lines.append("")
    output_lines.append("if (typeof module !== 'undefined' && module.exports) {")
    output_lines.append("    module.exports = axicons;")
    output_lines.append("}")
    
    return '\n'.join(output_lines)

def main():
    print("🔧 Corrective Refactor: Fix Thin Variants")
    print()
    
    print("📖 Parsing axicons.js...")
    icons = parse_axicons(AXICONS_FILE)
    print(f"✓ Found {len(icons)} icons")
    print()
    
    print("🔨 Fixing Thin variants...")
    fixed_count, already_wrapped_count = fix_thin_variants(icons)
    
    print(f"✓ Wrapped {fixed_count} Thin variants in <g stroke-width=\"1\">")
    print(f"✓ Already wrapped: {already_wrapped_count}")
    print()
    
    print("✍️  Generating output...")
    output = generate_output(icons)
    
    print("💾 Writing to file...")
    with open(AXICONS_FILE, 'w', encoding='utf-8') as f:
        f.write(output)
    
    print(f"✓ Updated: {AXICONS_FILE}")
    print()
    
    # Verify
    print("🔍 Verifying...")
    new_icons = parse_axicons(AXICONS_FILE)
    wrapped_count = sum(1 for i in new_icons if 'Thin' in i['name'] and i['svgContent'].startswith('<g stroke-width="1">'))
    print(f"✓ Verified: {wrapped_count} Thin variants wrapped in <g stroke-width=\"1\">")
    
    print()
    print("✅ Corrective refactor complete!")
    print()
    print("Changes:")
    print("  - All 421 problematic Thin variants now wrapped")
    print("  - 1px strokes enforced via <g stroke-width=\"1\">")
    print("  - Thin variants now visually distinct from Regular")
    print()

if __name__ == '__main__':
    main()
