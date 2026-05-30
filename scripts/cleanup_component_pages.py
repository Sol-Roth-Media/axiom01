#!/usr/bin/env python3
"""
Cleanup script for Axiom01 component doc pages.
- Removes inline <style> blocks from <head>
- Removes commented-out sidebar blocks
- Removes unnecessary outer <div> wrapper (leftover from sidebar layout)
- Adds <header> if missing
Run with --dry-run to preview changes.
"""

import re
import os
import sys

DRY_RUN = '--dry-run' in sys.argv
TARGET = None  # Set to filename to process single file

HEADER_HTML = """    <header class="main" data-component="mobile-navbar">
        <nav role="navigation" aria-label="Main Navigation">
            <a href="../../index.html" class="brand" aria-label="Axiom01 Framework Home">[Ax<span class="primary">01</span>]</a>
            <ul class="links">
                <li><a href="../../index.html#philosophy">Philosophy</a></li>
                <li><a href="../../index.html#components">Components</a></li>
                <li><a href="../../index.html#get-started">Get Started</a></li>
                <li><a href="../components-overview.html">Documentation</a></li>
            </ul>
            <div class="actions">
                <button class="search toggle" aria-label="Open Search">
                    <i class="fas fa-search" aria-hidden="true"></i>
                </button>
                <a href="https://github.com/Sol-Roth-Media/axiom" class="github" target="_blank" rel="noopener" aria-label="View on GitHub">
                    <i class="fab fa-github" aria-hidden="true"></i>
                    <span>GitHub</span>
                </a>
                <button class="theme toggle" id="themetoggle" aria-label="Toggle dark mode">
                    <i class="fas fa-moon" aria-hidden="true"></i>
                </button>
                <button class="menu toggle" aria-label="Toggle Menu">
                    <i class="fas fa-bars" aria-hidden="true"></i>
                </button>
            </div>
        </nav>
    </header>"""

# Files to skip - they have distinct / placeholder structure
SKIP_FILES = {'placeholder.html', 'component-browser.html', 'infinite-scroll.html'}

def remove_style_block(content):
    """Remove all <style>...</style> blocks from document head."""
    content = re.sub(r'\n[ \t]*<style>.*?</style>', '', content, flags=re.DOTALL)
    return content

def remove_commented_aside(content):
    """Remove <!-- <aside ... </aside> --> comment blocks."""
    content = re.sub(
        r'\n?[ \t]*<!--\s*<aside\b.*?</aside>\s*-->\n?',
        '\n',
        content,
        flags=re.DOTALL
    )
    return content

def remove_wrapper_div(content):
    """
    Remove the outer wrapper <div> that previously held aside+main.
    Finds lines that are just <div> or <div class="content"> after
    </header> or <body>, tracks nesting depth to remove both the
    opening and matching closing tag, and trims one indent level from
    the inner content.
    """
    lines = content.split('\n')
    result = []
    i = 0

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        if re.match(r'^<div(\s+class="content")?>$', stripped):
            prev = '\n'.join(result[-10:]) if result else ''
            after_header = re.search(r'</header>\s*$', prev, re.MULTILINE)
            after_body = re.search(r'<body[^>]*>\s*$', prev, re.MULTILINE)

            if after_header or after_body:
                depth = 1
                i += 1
                inner = []
                while i < len(lines) and depth > 0:
                    l = lines[i]
                    s = l.strip()
                    opens = len(re.findall(r'<div\b', s))
                    closes = s.count('</div>')
                    depth += opens - closes
                    if depth == 0:
                        i += 1
                        break
                    inner.append(l)
                    i += 1

                for l in inner:
                    if l.startswith('    '):
                        result.append(l[4:])
                    else:
                        result.append(l)
                continue

        result.append(line)
        i += 1

    return '\n'.join(result)

def add_header_if_missing(content):
    """Insert the standard nav header if the page lacks one."""
    if '<header' not in content:
        content = re.sub(
            r'(<body[^>]*>)',
            r'\1\n' + HEADER_HTML,
            content
        )
    return content

def clean_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        original = f.read()

    content = original
    content = remove_style_block(content)
    content = remove_commented_aside(content)
    content = remove_wrapper_div(content)
    content = add_header_if_missing(content)

    if content == original:
        print(f'  UNCHANGED {os.path.basename(filepath)}')
        return

    if DRY_RUN:
        orig_lines = original.count('\n')
        new_lines = content.count('\n')
        print(f'  WOULD CHANGE {os.path.basename(filepath)}: {orig_lines} -> {new_lines} lines')
    else:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'  CLEANED {os.path.basename(filepath)}')

if __name__ == '__main__':
    scripts_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(scripts_dir)
    comp_dir = os.path.join(project_dir, 'docs', 'components')

    for fn in sorted(os.listdir(comp_dir)):
        if not fn.endswith('.html'):
            continue
        if fn in SKIP_FILES:
            print(f'  SKIP {fn}')
            continue
        if TARGET and fn != TARGET:
            continue
        clean_file(os.path.join(comp_dir, fn))

    if DRY_RUN:
        print('\nDRY RUN complete - no files were modified.')
    else:
        print('\nDone.')

