import os

base = '/Users/solroth/Sites/axiom01'
files = [os.path.join(base, 'index.html')] + [
    os.path.join(base, 'docs', f)
    for f in os.listdir(os.path.join(base, 'docs'))
    if f.endswith('.html')
] + [
    os.path.join(base, 'docs', 'components', f)
    for f in os.listdir(os.path.join(base, 'docs', 'components'))
    if f.endswith('.html')
]

changed = []
for fp in files:
    with open(fp, 'r') as f:
        orig = f.read()
    updated = orig.replace('data-name="Package"', 'data-name="NPM"')
    updated = updated.replace('data-name="Brand-NPM"', 'data-name="NPM"')
    if updated != orig:
        with open(fp, 'w') as f:
            f.write(updated)
        changed.append(fp)

print('Updated NPM icon in:')
for f in changed:
    print(' ', f)

