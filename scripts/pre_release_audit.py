#!/usr/bin/env python3
"""Lightweight pre-release audit for docs/search consistency."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import re
import sys


ROOT = Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT / "docs"
SEARCH_SOURCE = ROOT / "js" / "index-page-manager.js"
COMPONENT_DOCS_DIR = DOCS_DIR / "components"

BEM_TOKEN_RX = re.compile(r"[a-z0-9][a-z0-9-]*(?:__|--)[a-z0-9-]+")
CLASS_ATTR_RX = re.compile(r'class="([^"]+)"')
CSS_CLASS_RX = re.compile(r"\.([a-zA-Z0-9_-]+(?:__|--)[a-zA-Z0-9_-]+)")

INTEGRATION_BEM_ALLOWLIST = (
    re.compile(r"^messages--[a-z0-9-]+$"),
    re.compile(r"^form-item--[a-z0-9-]+$"),
    re.compile(r"^pager__[a-z0-9-]+$"),
    re.compile(r"^pager__item--[a-z0-9-]+$"),
    re.compile(r"^media-library-item__[a-z0-9-]+$"),
    re.compile(r"^layout-builder__[a-z0-9-]+$"),
    re.compile(r"^field--widget-[a-z0-9-]+$"),
    re.compile(r"^field--formatter-[a-z0-9-]+$"),
)

BEM_ALLOWED_FILES = {
    ROOT / "css" / "axiom.css",
    DOCS_DIR / "integrations.html",
    DOCS_DIR / "drupal-contrib-fixtures.html",
}

LEGACY_STACK_PATTERNS: tuple[tuple[re.Pattern[str], str], ...] = (
    (re.compile(r'class="search\s+toggle"'), "legacy stacked search toggle class"),
    (re.compile(r'class="theme\s+toggle"'), "legacy stacked theme toggle class"),
    (re.compile(r'class="menu\s+toggle"'), "legacy stacked menu toggle class"),
    (re.compile(r'class="hero\s+small"'), "legacy stacked hero class"),
    (re.compile(r'class="[^"]*button\s+(primary|secondary|tertiary|small|medium|large)[^"]*"'), "legacy stacked button classes"),
    (re.compile(r'class="[^"]*dropdown\s+menu[^"]*"'), "legacy stacked dropdown menu classes"),
    (re.compile(r'class="[^"]*tooltip\s+(top|right|bottom|left)[^"]*"'), "legacy stacked tooltip placement classes"),
    (re.compile(r'class="[^"]*(step|form-step)\s+active[^"]*"'), "legacy stacked active-state classes"),
)


@dataclass
class Finding:
    scope: str
    message: str


def rel(path: Path) -> str:
    try:
        return str(path.relative_to(ROOT))
    except ValueError:
        return str(path)


def collect_docs_html() -> list[Path]:
    return sorted(DOCS_DIR.rglob("*.html"))


def collect_semantic_surfaces() -> list[Path]:
    return [ROOT / "index.html", *sorted(COMPONENT_DOCS_DIR.glob("*.html"))]


def is_allowed_integration_bem(path: Path, token: str) -> bool:
    if path not in BEM_ALLOWED_FILES:
        return False
    return any(pattern.match(token) for pattern in INTEGRATION_BEM_ALLOWLIST)


def audit_bem_gate(files: list[Path]) -> list[Finding]:
    findings: list[Finding] = []

    for file_path in files:
        text = file_path.read_text(encoding="utf-8", errors="ignore")

        if file_path.suffix == ".css":
            tokens = CSS_CLASS_RX.findall(text)
        else:
            tokens = []
            for classes in CLASS_ATTR_RX.findall(text):
                tokens.extend([token for token in classes.split() if BEM_TOKEN_RX.search(token)])

        for token in sorted(set(tokens)):
            if BEM_TOKEN_RX.search(token) and not is_allowed_integration_bem(file_path, token):
                findings.append(Finding(rel(file_path), f"BEM-style class blocked by quality gate: {token}"))

    return findings


def audit_legacy_class_stacking(files: list[Path]) -> list[Finding]:
    findings: list[Finding] = []

    for file_path in files:
        text = file_path.read_text(encoding="utf-8", errors="ignore")
        for pattern, message in LEGACY_STACK_PATTERNS:
            if pattern.search(text):
                findings.append(Finding(rel(file_path), message))

    return findings


def audit_component_compliance(files: list[Path]) -> list[Finding]:
    findings: list[Finding] = []

    for file_path in files:
        text = file_path.read_text(encoding="utf-8", errors="ignore")
        for classes in CLASS_ATTR_RX.findall(text):
            tokens = classes.split()
            if len(tokens) <= 2:
                continue
            if tokens[0] in {"fas", "far", "fab", "fa-solid", "fa-regular", "fa-brands"}:
                continue
            findings.append(Finding(rel(file_path), f"component page uses >2 class tokens: {classes}"))
            break

    return findings


def audit_semantic_parity() -> list[Finding]:
    findings: list[Finding] = []

    css_source = (ROOT / "css" / "axiom.css").read_text(encoding="utf-8", errors="ignore")
    doc_css = (ROOT / "css" / "doc-styles.css").read_text(encoding="utf-8", errors="ignore")
    tooltip_js = (ROOT / "js" / "components" / "tooltip.js").read_text(encoding="utf-8", errors="ignore")
    dropdown_js = (ROOT / "js" / "components" / "dropdown.js").read_text(encoding="utf-8", errors="ignore")

    parity_requirements = [
        ("button tone/data-size selectors", '[data-tone="primary"]' in css_source and '[data-size="small"]' in css_source),
        ("dropdown data selectors", '[data-dropdown-menu]' in css_source and '[data-dropdown-menu]' in doc_css and '[data-dropdown-toggle]' in dropdown_js),
        ("tooltip data selectors", '[data-placement="top"]' in css_source and '[data-tooltip-trigger]' in tooltip_js),
    ]

    for label, ok in parity_requirements:
        if not ok:
            findings.append(Finding("semantic-parity", f"missing parity support for {label}"))

    return findings


def audit_footer_consistency(files: list[Path]) -> list[Finding]:
    findings: list[Finding] = []

    for file_path in files:
        text = file_path.read_text(encoding="utf-8", errors="ignore")
        if '<footer class="main">' not in text:
            continue

        if "doc-styles.css" not in text:
            findings.append(Finding(rel(file_path), "footer page missing doc-styles.css include"))

        if '<div class="content">' not in text:
            findings.append(Finding(rel(file_path), "footer missing .content wrapper"))

    return findings


def audit_search_toggles(files: list[Path]) -> list[Finding]:
    findings: list[Finding] = []
    toggle_rx = re.compile(r'class="[^"]*search\s+toggle[^"]*"')
    manager_rx = re.compile(r'src="(?:\.\./|\.\./\.\./)js/index-page-manager\.js"')

    for file_path in files:
        text = file_path.read_text(encoding="utf-8", errors="ignore")
        if toggle_rx.search(text) and not manager_rx.search(text):
            findings.append(Finding(rel(file_path), "search toggle exists but index-page-manager.js is not loaded"))

    return findings


def audit_scaffold_comments(files: list[Path]) -> list[Finding]:
    findings: list[Finding] = []
    banned = [
        "<!-- <aside",
        "Added this line",
        "Link to new doc-specific styles",
    ]

    for file_path in files:
        text = file_path.read_text(encoding="utf-8", errors="ignore")
        for marker in banned:
            if marker in text:
                findings.append(Finding(rel(file_path), f"contains stale scaffold marker: {marker}"))

    return findings


def extract_search_urls() -> list[str]:
    text = SEARCH_SOURCE.read_text(encoding="utf-8", errors="ignore")
    return re.findall(r'url:\s*"([^"]+)"', text)


def audit_search_urls(urls: list[str]) -> list[Finding]:
    findings: list[Finding] = []

    for url in urls:
        if url.startswith("http") or url.startswith("#"):
            continue

        path_part = url.split("?", 1)[0]
        target = (ROOT / path_part).resolve()
        if not target.exists():
            findings.append(Finding("js/index-page-manager.js", f"searchData target does not exist: {url}"))

        if "placeholder.html" in url:
            findings.append(Finding("js/index-page-manager.js", f"searchData still uses placeholder URL: {url}"))

    return findings


def main() -> int:
    docs_files = collect_docs_html()
    semantic_surface_files = collect_semantic_surfaces()
    search_urls = extract_search_urls()

    findings: list[Finding] = []
    findings.extend(audit_bem_gate([ROOT / "css" / "axiom.css", *docs_files, ROOT / "index.html"]))
    findings.extend(audit_legacy_class_stacking(semantic_surface_files))
    findings.extend(audit_component_compliance(sorted(COMPONENT_DOCS_DIR.glob("*.html"))))
    findings.extend(audit_semantic_parity())
    findings.extend(audit_footer_consistency(docs_files))
    findings.extend(audit_search_toggles(docs_files))
    findings.extend(audit_scaffold_comments(docs_files))
    findings.extend(audit_search_urls(search_urls))

    print("Axiom01 pre-release audit")
    print(f"- docs HTML files scanned: {len(docs_files)}")
    print(f"- semantic surfaces scanned: {len(semantic_surface_files)}")
    print(f"- searchData entries scanned: {len(search_urls)}")

    if not findings:
        print("- result: PASS")
        return 0

    print(f"- result: FAIL ({len(findings)} findings)")
    for item in findings:
        print(f"  - {item.scope}: {item.message}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
