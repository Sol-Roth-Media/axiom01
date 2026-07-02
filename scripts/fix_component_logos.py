 #!/usr/bin/env python3
"""
Update component pages with the new Axiom wordmark logo.
Handles complex SVG markup on single lines.
"""
import os
import re

base = "/Users/solroth/Sites/axiom01"
components_path = os.path.join(base, 'docs', 'components')

def update_component_file(filepath):
    """Update component HTML file with new wordmark logo."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content

        # Replace the long SVG brand markup with simple text
        # Pattern: <a href="../../index.html" class="brand" ...>...</a>
        content = re.sub(
            r'<a href="\.\.\/\.\.\/index\.html" class="brand" aria-label="Axiom01 Home">.*?</a>',
            '<a href="../../index.html" class="brand" aria-label="Axiom01 Home">Axiom</a>',
            content,
            flags=re.DOTALL
        )

        # Replace footer logo
        content = re.sub(
            r'<a href="\.\.\/\.\.\/index\.html" class="logo">.*?</a>',
            '<a href="../../index.html" class="logo">Axiom</a>',
            content,
            flags=re.DOTALL
        )

        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error updating {filepath}: {e}")
        return False

# Update all component files
if os.path.exists(components_path):
    updated_count = 0
    for f in os.listdir(components_path):
        if f.endswith('.html'):
            filepath = os.path.join(components_path, f)
            if update_component_file(filepath):
                updated_count += 1
                print(f"✓ {f}")
    print(f"\nUpdated {updated_count} component pages")
else:
    print(f"Components path not found: {components_path}")

