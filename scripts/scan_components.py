#!/usr/bin/env python3
import re
import os

for fn in sorted(os.listdir('docs/components')):
    if not fn.endswith('.html'):
        continue
    with open(f'docs/components/{fn}') as f:
        content = f.read()
    has_div_content = bool(re.search(r'<div class="content">', content, re.I))
    has_plain_div = bool(re.search(r'</header>\s*<div>', content, re.I))
    has_aside_comment = bool(re.search(r'<!--.*?<aside', content, re.DOTALL))
    has_style = '<style>' in content
    print(f'{fn}: div.content={has_div_content}, plain_div={has_plain_div}, aside={has_aside_comment}, style={has_style}')

