import re
from pathlib import Path

def fix_footer():
    css_file = Path('/Users/solroth/Sites/axiom01/css/axiom.css')
    content = css_file.read_text(encoding='utf-8')

    # Remove the old footer.footer CSS block
    start_str = "/* ========================================\n   FOOTER COMPONENT"
    start_idx = content.find(start_str)
    if start_idx != -1:
        # Find the next component or end of block
        end_str = "/* ========================================\n   OVERLAYS"
        end_idx = content.find(end_str, start_idx)
        if end_idx == -1:
            end_str = "/* ========================================\n"
            end_idx = content.find(end_str, start_idx + len(start_str))
            
        if end_idx != -1:
            content = content[:start_idx] + content[end_idx:]
            
    # Add new footer CSS at the end of axiom.components layer
    # Since we wrapped components in a layer, we just find the end of the file (which is `}\n`)
    # and insert before the last `}`.
    new_footer = """
/* ========================================
   FOOTER COMPONENT
   ======================================== */
footer {
  background: var(--ax-surface);
  color: var(--ax-text);
  border-top: 2px solid var(--ax-border);
  padding: var(--a-space-3xl) var(--a-space-l);
  margin-top: var(--a-space-4xl);
  transition: background-color var(--a-transition-base), border-color var(--a-transition-base);
}

footer > .container {
  max-width: var(--ax-max-width);
  margin: 0 auto;
}

footer section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--a-space-2xl);
  margin-bottom: var(--a-space-2xl);
  padding-bottom: var(--a-space-2xl);
  border-bottom: 1px solid var(--ax-border);
  transition: gap var(--a-transition-base);
}

footer .brand {
  display: flex;
  flex-direction: column;
  gap: var(--a-space-m);
}

footer .brand > a {
  font-family: var(--a-font-family-mono);
  font-size: var(--a-font-size-l);
  font-weight: var(--a-font-weight-bold);
  color: var(--a-color-on-surface);
  text-decoration: none;
  transition: all var(--a-transition-base);
  display: inline-block;
  max-width: fit-content;
  position: relative;
}

footer .brand > a::before {
  content: '';
  position: absolute;
  inset: -4px -8px;
  background: var(--a-color-primary);
  border-radius: var(--a-border-radius-sm);
  opacity: 0;
  z-index: -1;
  transition: opacity var(--a-transition-base);
}

footer .brand > a:hover {
  color: var(--a-color-primary);
}

footer .brand > a:hover::before {
  opacity: 0.1;
}

footer .brand > a .primary {
  color: var(--a-color-primary);
}

footer .brand > p {
  font-size: var(--a-font-size-s);
  color: var(--a-color-text-muted);
  margin: 0;
  line-height: var(--a-line-height-base);
}

footer nav {
  display: flex;
  flex-direction: column;
  gap: var(--a-space-m);
}

footer nav h4 {
  font-size: var(--a-font-size-s);
  font-weight: var(--a-font-weight-bold);
  color: var(--a-color-on-surface);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}

footer nav ul {
  display: flex;
  flex-direction: column;
  gap: var(--a-space-s);
  list-style: none;
  padding: 0;
  margin: 0;
}

footer nav a {
  color: var(--a-color-text-secondary);
  text-decoration: none;
  font-size: var(--a-font-size-base);
  transition: color var(--a-transition-base);
}

footer nav a:hover {
  color: var(--a-color-primary);
}

footer > .container > div:last-child {
  display: flex;
  flex-direction: column;
  gap: var(--a-space-m);
  align-items: center;
  text-align: center;
}

@media (min-width: 768px) {
  footer > .container > div:last-child {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

footer p.copyright {
  font-size: var(--a-font-size-s);
  color: var(--a-color-text-muted);
  margin: 0;
}

footer ul.legal {
  display: flex;
  gap: var(--a-space-m);
  list-style: none;
  padding: 0;
  margin: 0;
}

footer ul.legal a {
  color: var(--a-color-text-muted);
  text-decoration: none;
  font-size: var(--a-font-size-s);
  transition: color var(--a-transition-base);
}

footer ul.legal a:hover {
  color: var(--a-color-on-surface);
}

footer .scroll-top {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--a-space-xl);
  height: var(--a-space-xl);
  border-radius: var(--a-border-radius-full);
  background: var(--a-color-surface-variant);
  color: var(--a-color-on-surface);
  border: none;
  cursor: pointer;
  transition: all var(--a-transition-base);
}

footer .scroll-top:hover {
  background: var(--a-color-primary);
  color: var(--a-color-on-primary);
}
"""
    
    # Insert new footer before the very last `}`
    last_brace_idx = content.rfind('}')
    if last_brace_idx != -1:
        content = content[:last_brace_idx] + new_footer + "\n}\n"
        css_file.write_text(content, encoding='utf-8')
        print("Footer replaced successfully in axiom.css")
    else:
        print("Could not find the last brace")

if __name__ == '__main__':
    fix_footer()
