#!/usr/bin/env python3
"""
Normalizes the primary navigation links across all documentation and component pages
in Axiom01, ensuring complete 6-link consistency:
1. Get Started
2. Docs
3. Axicons
4. Extensions
5. Case Study
6. Fonts
"""

import glob
import os
import re
import sys

def get_links_html(depth, current_file):
    # depth 0: root (index.html)
    # depth 1: docs/*.html
    # depth 2: docs/components/*.html
    
    if depth == 0:
        p_start = "docs/overview-quickstart.html"
        p_docs = "docs/components-overview.html"
        p_icons = "docs/axicons.html"
        p_ext = "docs/extensions.html"
        p_case = "docs/case-study-live-performance.html"
        p_fonts = "docs/fonts.html"
    elif depth == 1:
        p_start = "overview-quickstart.html"
        p_docs = "components-overview.html"
        p_icons = "axicons.html"
        p_ext = "extensions.html"
        p_case = "case-study-live-performance.html"
        p_fonts = "fonts.html"
    else: # depth 2
        p_start = "../overview-quickstart.html"
        p_docs = "../components-overview.html"
        p_icons = "../axicons.html"
        p_ext = "../extensions.html"
        p_case = "../case-study-live-performance.html"
        p_fonts = "../fonts.html"

    # Determine active link
    fname = os.path.basename(current_file)
    dirname = os.path.dirname(current_file)

    def is_active(target):
        if target == "docs":
            return dirname.endswith("components") or fname == "components-overview.html"
        elif target == "start":
            return fname == "overview-quickstart.html"
        elif target == "icons":
            return fname == "axicons.html"
        elif target == "ext":
            return fname in ("extensions.html", "audio-components.html")
        elif target == "case":
            return fname == "case-study-live-performance.html"
        elif target == "fonts":
            return fname == "fonts.html"
        return False

    def link_tag(url, text, target_key):
        if is_active(target_key):
            return f'<li><a href="{url}" class="active" aria-current="page">{text}</a></li>'
        return f'<li><a href="{url}">{text}</a></li>'

    lines = [
        '\t\t<ul class="links">',
        f'\t\t\t{link_tag(p_start, "Get Started", "start")}',
        f'\t\t\t{link_tag(p_docs, "Docs", "docs")}',
        f'\t\t\t{link_tag(p_icons, "Axicons", "icons")}',
        f'\t\t\t{link_tag(p_ext, "Extensions", "ext")}',
        f'\t\t\t{link_tag(p_case, "Case Study", "case")}',
        f'\t\t\t{link_tag(p_fonts, "Fonts", "fonts")}',
        '\t\t</ul>'
    ]
    return '\n'.join(lines)


def process_file(filepath, dry_run=False):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Only process files that have a main header with navigation links
    if '<header class="main"' not in content:
        return False

    m = re.search(r'([ \t]*<ul class="links">.*?</ul>)', content, re.DOTALL)
    if not m:
        return False

    old_ul = m.group(1)

    # Determine depth
    norm_path = os.path.normpath(filepath)
    parts = norm_path.split(os.sep)
    
    if len(parts) == 1:
        depth = 0
    elif len(parts) == 2 and parts[0] == 'docs':
        depth = 1
    elif len(parts) == 3 and parts[0] == 'docs' and parts[1] == 'components':
        depth = 2
    else:
        return False

    new_ul = get_links_html(depth, filepath)
    
    if old_ul == new_ul:
        return False

    if not dry_run:
        new_content = content[:m.start(1)] + new_ul + content[m.end(1):]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

    return True


if __name__ == '__main__':
    dry_run = '--dry-run' in sys.argv
    files = sorted(glob.glob('index.html') + glob.glob('docs/*.html') + glob.glob('docs/components/*.html'))
    modified = []
    for f in files:
        if process_file(f, dry_run=dry_run):
            modified.append(f)

    mode = "DRY RUN: would modify" if dry_run else "Modified"
    print(f"{mode} {len(modified)} files:")
    for f in modified[:15]:
        print(f"  - {f}")
    if len(modified) > 15:
        print(f"  ... and {len(modified) - 15} more files.")
