#!/bin/bash
# Combines all index part files into index.html in the optimal order

cat index.header.html \
    index.hero.html \
    index.philosophy.html \
    index.style-guide.html \
    index.about.html \
    index.footer.html > index.html

echo "Combined all part files into index.html"
