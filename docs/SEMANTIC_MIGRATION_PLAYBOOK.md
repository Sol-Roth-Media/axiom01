# Semantic Migration Playbook

Use this playbook to migrate legacy class-heavy docs snippets toward the Axiom01 semantic-first profile.

## Goals

- Keep one descriptive root class where possible.
- Prefer semantic elements and element order over utility-class stacks.
- Avoid BEM and modifier chains in docs examples.
- Keep class attributes at two tokens or fewer in component examples unless explicitly grandfathered.

## Migration sequence

1. **Baseline metrics**  
   Run `npm run audit:philosophy` and use `SEMANTIC_DEBT_BACKLOG.md`.
2. **Pick a small page batch**  
   Work highest-density pages in groups of 3-5.
3. **Remove redundant wrappers first**  
   Replace unnecessary `<div>` wrappers with semantic elements (`section`, `article`, `nav`, `header`, `footer`).
4. **Trim class chains**  
   Convert 3+ token class chains to two tokens max using:
   - structural selectors,
   - `data-*` attributes for state/variant,
   - existing semantic tags.
5. **Re-run quality lane**  
   `npm test` and confirm no audit regressions.

## Safe transformations

- `class="component variant size"` → `class="component variant" data-size="size"`
- nested wrapper utility classes → semantic parent/child structure with descendant selectors
- action anchors (`href="#"`) → `button type="button"`

## Validation checklist per migrated page

- [ ] No new inline styles or inline handlers.
- [ ] No new BEM (`__`) or modifier (`--`) tokens.
- [ ] No new class chains above two tokens.
- [ ] Interactive behavior still functions.
- [ ] Accessibility semantics preserved (roles, labels, keyboard path).
