#!/bin/bash
# Combines all index part files (now renamed) into index.html in the correct order

cat index.header.html \
    index.hero.html \
    index.components-demo.html \
    index.forms-demo.html \
    index.style-guide.html \
    index.philosophy.html \
    index.about.html \
    index.getting-started.html \
    index.footer.html > index.html

echo "Combined all new part files into index.html"
