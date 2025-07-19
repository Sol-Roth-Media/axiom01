#!/bin/bash
# Combines all index part files into index.redesign.html in the optimal order

cat index.header.html \
    index.hero.html \
    index.philosophy.html \
    index.style-guide.html \
    index.about.html \
    index.footer.html > index.redesign.html

echo "Combined all new part files into index.redesign.html"
