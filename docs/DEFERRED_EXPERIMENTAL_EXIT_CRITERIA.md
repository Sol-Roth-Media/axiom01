# Deferred / Experimental Exit Criteria

Use this policy to prevent long-lived ambiguity in backlog status.

## Deferred item exit criteria

A deferred item should move back to active only when:

- owner and milestone are assigned,
- acceptance checks are defined,
- maintenance cost is acceptable for solo maintainer + AI workflow.

## Experimental item promotion criteria

An experimental feature can be promoted when:

1. Docs parity is stable (overview + searchData + module mapping).
2. Lifecycle behavior is documented (`init()`/`destroy()` expectations).
3. Quality lane passes with no extra exceptions.
4. Migration notes exist for any behavior changes.

## Sunset criteria

An experimental item should be sunset when:

- no active maintainer exists,
- repeated breakage occurs without migration path, or
- it requires class-heavy/anti-philosophy markup to function.
