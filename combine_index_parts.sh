#!/bin/bash
# Combines all index part files (now renamed) into index.html in the optimal order

cat index.header.html \
    index.hero.html \
    index.getting-started.html \
    index.components-demo.html \
    index.forms-demo.html \
    index.style-guide.html \
    index.about.html \
    index.philosophy.html \
    index.footer.html > index.html

echo "Combined all new part files into index.html"
