import os
import re
from pathlib import Path

root = Path('/Users/solroth/Sites/axiom01')

files = [
    root / 'index.html',
    root / 'docs/colors-advanced.html',
    root / 'docs/components-advanced.html',
    root / 'docs/components-overview.html',
    root / 'docs/components-simple.html',
    root / 'docs/layout-advanced.html',
    root / 'docs/typography-advanced.html',
    root / 'docs/media-advanced.html',
    root / 'docs/form-elements.html',
    root / 'docs/interactive-playground.html',
    root / 'docs/components/accordion.html',
    root / 'docs/components/alert.html',
    root / 'docs/components/badge.html',
    root / 'docs/components/button.html',
    root / 'docs/components/card.html',
    root / 'docs/components/modal.html',
    root / 'docs/components/tabs.html',
    root / 'docs/components/tooltip.html',
    root / 'docs/components/dropdown.html',
    root / 'docs/components/navigation.html',
]

comment_pattern = re.compile(r'<!--(.*?)-->', re.IGNORECASE)
scaffold_words = re.compile(r'\b(todo|fixme|placeholder|scaffold|temp|stale|old|hack|xxx)\b', re.IGNORECASE)
inline_style_pattern = re.compile(r'<[^>]+\sstyle\s*=\s*"[^"]*"[^>]*>', re.IGNORECASE)
magic_number_pattern = re.compile(r'\b\d+(?:\.\d+)?(px|rem|em|vh|vw|%)\b')
ref_pattern = re.compile(r'\b(?:href|src)\s*=\s*"([^"]+)"', re.IGNORECASE)

lines_out = []

for f in files:
    if not f.exists():
        lines_out.append(f"MISSING_FILE: {f}")
        continue

    text = f.read_text(encoding='utf-8', errors='ignore')
    file_rel = f.relative_to(root)
    file_lines = text.splitlines()

    for i, line in enumerate(file_lines, start=1):
        for m in comment_pattern.finditer(line):
            c = m.group(1).strip()
            if scaffold_words.search(c):
                lines_out.append(f"SCAFFOLD_COMMENT {file_rel}:{i}: {line.strip()}")

        if '&lt;' not in line and inline_style_pattern.search(line):
            lines_out.append(f"INLINE_STYLE {file_rel}:{i}: {line.strip()}")
            style_m = re.search(r'style\s*=\s*"([^"]*)"', line, re.IGNORECASE)
            if style_m:
                style = style_m.group(1)
                if magic_number_pattern.search(style):
                    lines_out.append(f"MAGIC_NUMBER_STYLE {file_rel}:{i}: {line.strip()}")

        for rm in ref_pattern.finditer(line):
            ref = rm.group(1).strip()
            if not ref or ref.startswith(('#', 'http://', 'https://', 'mailto:', 'tel:', 'javascript:')):
                continue
            target = (f.parent / ref).resolve()
            if not target.exists():
                lines_out.append(f"BROKEN_LOCAL_REF {file_rel}:{i}: {rm.group(0)} -> {ref}")

# stale wrapper heuristic
for f in files:
    if not f.exists():
        continue
    text = f.read_text(encoding='utf-8', errors='ignore')
    file_rel = f.relative_to(root)
    if re.search(r'<div>\s*<!--<aside>', text, re.DOTALL):
        lines_out.append(f"STALE_WRAPPER {file_rel}: found anonymous wrapper around commented-out aside/main block")

out_file = root / 'tmp_docs_audit_report.txt'
out_file.write_text('\n'.join(lines_out) + ('\n' if lines_out else ''), encoding='utf-8')
print(f"Wrote {out_file} with {len(lines_out)} findings")

