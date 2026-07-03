#!/usr/bin/env python3
"""
Update all HTML files with the new Axiom wordmark logo.
"""
import os
import re

base = "/Users/solroth/Sites/axiom01"

# New wordmark logo - just "Axiom" in gradient
WORDMARK_HEADER = '''<a href="/" class="brand" aria-label="Axiom01 Framework Home">Axiom</a>'''

WORDMARK_FOOTER = '''<a href="../index.html" class="logo">Axiom</a>'''

WORDMARK_DOC_HEADER = '''<a href="../index.html" class="brand" aria-label="Axiom01 Home">Axiom</a>'''

def update_html_file(filepath, is_doc=False):
    """Update HTML file with new wordmark logo."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content

        # Update header brand (different patterns for index vs docs)
        if filepath.endswith('index.html') and '/docs/' not in filepath:
            # Main index.html - update header brand
            content = re.sub(
                r'<a href="/" class="brand" aria-label="Axiom01 Framework Home">.*?</a>',
                WORDMARK_HEADER,
                content,
                flags=re.DOTALL
            )
            # Update footer logo
            content = re.sub(
                r'<a href="/" class="logo">.*?</a>',
                '<a href="/" class="logo">Axiom</a>',
                content,
                flags=re.DOTALL
            )
        else:
            # Doc files - update header brand
            content = re.sub(
                r'<a href="\.\./index\.html" class="brand" aria-label="Axiom01 Home">.*?</a>',
                WORDMARK_DOC_HEADER,
                content,
                flags=re.DOTALL
            )
            # Update footer logo
            content = re.sub(
                r'<a href="\.\./index\.html" class="logo">.*?</a>',
                '<a href="../index.html" class="logo">Axiom</a>',
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

# Get all HTML files
files_to_update = []

# Index
files_to_update.append(os.path.join(base, 'index.html'))

# Docs
docs_path = os.path.join(base, 'docs')
if os.path.exists(docs_path):
    for f in os.listdir(docs_path):
        if f.endswith('.html'):
            files_to_update.append(os.path.join(docs_path, f))

# Component docs
components_path = os.path.join(base, 'docs', 'components')
if os.path.exists(components_path):
    for f in os.listdir(components_path):
        if f.endswith('.html'):
            files_to_update.append(os.path.join(components_path, f))

# Update all files
updated_count = 0
for filepath in files_to_update:
    if update_html_file(filepath):
        updated_count += 1
        print(f"✓ Updated: {filepath.replace(base, '')}")

print(f"\nWordmark logo updated in {updated_count} files")

