# Repo-Init Checklist + First Commit Plan

Scope: create the standalone `axiom01-drupal11-starter-theme` GitHub repository from this scaffold.

## Repo-init checklist

- [ ] Create GitHub repository named `axiom01-drupal11-starter-theme` (public/private as needed).
- [ ] Add repository description and topics: `drupal11`, `theme`, `starter-theme`, `axiom01`, `twig`, `accessibility`.
- [ ] Copy scaffold contents from this directory into the new repository root.
- [ ] Preserve file and folder structure (`templates/`, `config/`, `css/`, `js/`, docs, and root YAML/PHP files).
- [ ] Configure default branch protections (require PRs and passing checks).
- [ ] Add CODEOWNERS (single-maintainer + AI-agent-friendly review ownership).
- [ ] Add issue templates for bug/docs/drupal-integration requests.
- [ ] Add PR template aligned with compatibility and validation checklist.
- [ ] Wire CI to run syntax and template sanity checks on pull requests.
- [ ] Document release/version policy and compatibility update policy.
- [ ] Validate Drupal installation path and enablement instructions in README.
- [ ] Add/verify dbase integration notes so dbase users can select this starter theme.
- [ ] Ensure docs updates ship in both `axiom01` and `dbase` when integration/setup flow changes.

## First commit plan

- [ ] Commit 1: scaffold import baseline (all current files, no functional changes).
- [ ] Commit 2: repository governance defaults (templates, branch policy docs, CODEOWNERS).
- [ ] Commit 3: CI baseline for lint/validation checks.
- [ ] Commit 4: docs pass (README extraction notes, compatibility contract, validation workflow).
- [ ] Commit 5: first hardening pass for accessibility + menu rendering (then tag first prerelease).

## First commit message suggestion

`chore: initialize axiom01 drupal11 starter theme scaffold`
