# Axiom01 Component Compatibility Map

This map clarifies maintenance guarantees for component modules.

## Core-supported (stability expected)

These are part of the default runtime contract and should maintain stable init/destroy behavior and documentation parity:

- `accordion`
- `dropdown`
- `mobile-navbar`
- `search`
- `tooltip`
- `component-browser`
- `spacing-demo`
- `editor`

## Extended-supported (actively maintained, lower churn than experimental)

- `advanced-table`
- `autocomplete`
- `audio-player`
- `data-list`
- `filedisplay`
- `masonry`
- `multimediapicker`
- `playlist`
- `pullrefresh`
- `rating`
- `storyview`
- `swipecards`
- `timer`
- `touch`
- `video-player`

## Helper/internal modules (not direct docs-surface components)

- `dynamic-content-helpers`

## Experimental policy

A module should be treated as experimental when:

- docs and examples are present but API shape is still changing,
- no migration note exists yet for breaking behavior changes, or
- lifecycle cleanup behavior is still under active redesign.

When promoting a module from experimental to core-supported:

1. Ensure docs/components overview parity is enforced and passing.
2. Ensure `init()`/`destroy()` lifecycle semantics are documented.
3. Add migration notes if behavior changed.
