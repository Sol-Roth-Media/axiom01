from pathlib import Path
import re

root = Path('/Users/solroth/Sites/axiom01/docs/components')
updated = []

for path in sorted(root.glob('*.html')):
    text = path.read_text()
    if not text.strip():
        continue

    original = text

    # Remove bad backreference artifacts from prior automated replacement.
    text = text.replace('\n    \\1\n', '\n')
    text = text.replace('\n\\1\n', '\n')
    text = text.replace('\\1', '')

    # Normalize escaped malformed stylesheet tag.
    text = text.replace(
        '<link rel=\\"stylesheet\\" href=\\"../../css/doc-preview.css\\">',
        '<link rel="stylesheet" href="../../css/doc-preview.css">',
    )

    # Rebuild the docs stylesheet trio after the axiom.css link.
    text = re.sub(
        r'(<link\s+rel="stylesheet"\s+href="\.\./\.\./css/axiom\.css"\s*>\s*)'
        r'(?:(?:<link\s+rel="stylesheet"\s+href="\.\./\.\./css/doc-styles\.css"\s*>\s*)?)'
        r'(?:(?:<link\s+rel="stylesheet"\s+href="\.\./\.\./css/doc-preview\.css"\s*>\s*)?)',
        r'\1    <link rel="stylesheet" href="../../css/doc-styles.css">\n'
        r'    <link rel="stylesheet" href="../../css/doc-preview.css">\n',
        text,
        count=1,
        flags=re.IGNORECASE,
    )

    # Ensure component-doc class remains present.
    text = re.sub(r'<body\s*>', '<body class="axiom-body component-doc">', text, count=1, flags=re.IGNORECASE)
    text = re.sub(r'<body\s+class="axiom-body"\s*>', '<body class="axiom-body component-doc">', text, count=1, flags=re.IGNORECASE)

    if text != original:
        path.write_text(text)
        updated.append(path.name)

print(f'updated {len(updated)} files')
for name in updated:
    print(name)

