# Semantic Debt Backlog Map (Top 20)

Derived from current `npm run audit:philosophy --enforce` output and used as the active docs-cleanup queue.

## Working method

- Keep this list sorted by class-token density.
- Tackle pages in small batches (3-5 pages per PR).
- Prefer reducing class-token count by removing redundant wrapper classes before adding new classes.
- Preserve behavior and accessibility semantics while simplifying markup.

## Current top 20 queue

1. [ ] `docs/interactive-component-browser.html` (tokens=177, multi=53, dashed=96)
2. [ ] `docs/colors-advanced.html` (tokens=148, multi=42, dashed=77)
3. [ ] `docs/components/feature-grid.html` (tokens=143, multi=22, dashed=49)
4. [x] `docs/components/button.html` (tokens=129, multi=37, dashed=27) — first semantic pass applied to size variant examples
5. [ ] `docs/components/stats.html` (tokens=128, multi=5, dashed=54)
6. [ ] `docs/components/badge.html` (tokens=122, multi=43, dashed=20)
7. [ ] `docs/components/cta.html` (tokens=115, multi=26, dashed=17)
8. [ ] `docs/placeholder.html` (tokens=112, multi=23, dashed=21)
9. [ ] `docs/components/avatar.html` (tokens=110, multi=41, dashed=22)
10. [ ] `docs/components/multi-step-form.html` (tokens=110, multi=23, dashed=34)
11. [ ] `docs/layout-advanced.html` (tokens=105, multi=20, dashed=63)
12. [ ] `docs/dynamic-content.html` (tokens=98, multi=12, dashed=25)
13. [ ] `docs/components/tooltip.html` (tokens=97, multi=22, dashed=26)
14. [ ] `docs/components/alert.html` (tokens=95, multi=33, dashed=23)
15. [ ] `docs/form-elements.html` (tokens=89, multi=10, dashed=49)
16. [ ] `docs/components/navigation.html` (tokens=87, multi=20, dashed=12)
17. [ ] `docs/dynamic-content-examples.html` (tokens=85, multi=25, dashed=32)
18. [ ] `docs/components/dropdown.html` (tokens=84, multi=20, dashed=16)
19. [ ] `docs/media-advanced.html` (tokens=84, multi=19, dashed=35)
20. [ ] `docs/components/progress.html` (tokens=80, multi=13, dashed=12)

