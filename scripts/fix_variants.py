import os, re
docs_dir = "docs/components"
for root, _, files in os.walk(docs_dir):
    for f in files:
        if f.endswith(".html"):
            path = os.path.join(root, f)
            with open(path, "r") as file:
                content = file.read()
            # Replace class="x" data-variant="y" with class="x y"
            new_content = re.sub(r'\bclass="([^"]+)"\s+data-variant="([^"]+)"', r'class="\1 \2"', content)
            new_content = re.sub(r'\bdata-variant="([^"]+)"\s+class="([^"]+)"', r'class="\2 \1"', new_content)
            
            if content != new_content:
                with open(path, "w") as file:
                    file.write(new_content)
                print(f"Updated {path}")
