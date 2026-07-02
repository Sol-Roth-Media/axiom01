import os, re

BRAND_SVG = '<span aria-hidden="true"><svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g_nb" x1="30" y1="104" x2="98" y2="28" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FF007F"/><stop offset="50%" stop-color="#7928CA"/><stop offset="100%" stop-color="#1A1B2F"/></linearGradient></defs><path d="M30 104L64 28L98 104" stroke="url(#g_nb)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 74h40" stroke="url(#g_nb)" stroke-width="12" stroke-linecap="round"/><path d="M64 4v18M64 106v18M4 64h18M106 64h18" stroke="url(#g_nb)" stroke-width="7" stroke-linecap="round"/><circle cx="64" cy="28" r="6" fill="url(#g_nb)"/></svg></span><span class="brand-num">10</span><span>M</span>'

def update_brand(content):
    # Replace text logo pattern [Ax<span class="primary">01</span>]
    content = re.sub(
        r'\[Ax<span class="primary">01</span>\]',
        BRAND_SVG,
        content
    )
    # Replace old axicon brand markup (the one in index.html from yesterday)
    content = re.sub(
        r'<span class="axicon" aria-hidden="true"><svg[^>]*>.*?</svg></span>AX<span class="primary">10</span>M',
        BRAND_SVG,
        content,
        flags=re.DOTALL
    )
    content = re.sub(
        r'<span(?: class="brand-icon")? aria-hidden="true"><svg[^>]*>.*?</svg></span><span class="brand-num">10</span>(?:<span(?: class="brand-tail")?>M</span>|M)',
        BRAND_SVG,
        content,
        flags=re.DOTALL
    )
    content = content.replace(
        '<span class="brand-num">10</span>M',
        '<span class="brand-num">10</span><span>M</span>'
    )
    content = content.replace(
        '<span class="brand-num">10</span><span class="brand-tail">M</span>',
        '<span class="brand-num">10</span><span>M</span>'
    )
    return content

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
    updated = update_brand(orig)
    if updated != orig:
        with open(fp, 'w') as f:
            f.write(updated)
        changed.append(fp)

print('Updated files:')
for f in changed:
    print(' ', f)
print(f'Total: {len(changed)} files')

