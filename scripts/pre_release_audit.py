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


def audit_semantic_compliance(files: list[Path]) -> list[Finding]:
    findings: list[Finding] = []
    class_attr_rx = re.compile(r'class="([^"]+)"')

    for file_path in files:
        text = file_path.read_text(encoding="utf-8", errors="ignore")

        # Inline handlers are easy to slip into examples and bypass component cleanup patterns.
        if "onclick=" in text:
            findings.append(Finding(rel(file_path), "contains inline onclick handler; use bound listeners in scripts"))

        for class_value in class_attr_rx.findall(text):
            for cls in class_value.split():
                if cls.startswith("doc-"):
                    findings.append(Finding(rel(file_path), f"forbidden doc-* class found: {cls}"))

                if "__" in cls:
                    findings.append(Finding(rel(file_path), f"BEM-style class found: {cls}"))

                if "--" in cls:
                    findings.append(Finding(rel(file_path), f"modifier-style class found: {cls}"))

            if len(class_value.split()) > 4:
                findings.append(
                    Finding(
                        rel(file_path),
                        f"over-classed markup found: class attribute has {len(class_value.split())} classes",
                    )
                )

    return findings


def extract_search_urls() -> list[str]:
    text = SEARCH_SOURCE.read_text(encoding="utf-8", errors="ignore")
    return re.findall(r'url:\s*"([^"]+)"', text)


def audit_component_parity() -> list[Finding]:
    findings: list[Finding] = []
    docs_components = DOCS_DIR / "components"
    component_docs = sorted(p for p in docs_components.glob("*.html"))
    component_doc_names = {p.stem for p in component_docs}

    search_urls = extract_search_urls()
    indexed_component_names = {
        Path(url).stem for url in search_urls if url.startswith("docs/components/")
    }

    component_modules = sorted((ROOT / "js" / "components").glob("*.js"))
    component_module_names = {p.stem for p in component_modules}
    module_exclusions = {"component-browser", "dynamic-content-helpers"}

    index_exclusions = {"placeholder"}
    missing_from_index = sorted(
        name for name in (component_doc_names - indexed_component_names) if name not in index_exclusions
    )
    for name in missing_from_index:
        findings.append(
            Finding(
                "js/index-page-manager.js",
                f"component doc missing from searchData index: docs/components/{name}.html",
            )
        )

    missing_doc_for_module = sorted(
        name
        for name in (component_module_names - component_doc_names)
        if name not in module_exclusions
    )
    for name in missing_doc_for_module:
        findings.append(
            Finding(
                "docs/components",
                f"component module missing companion docs page: js/components/{name}.js",
            )
        )

    return findings


def audit_components_overview_parity() -> list[Finding]:
    findings: list[Finding] = []
    overview = DOCS_DIR / "components-overview.html"
    text = overview.read_text(encoding="utf-8", errors="ignore")

    overview_names = set(re.findall(r'href="components/([a-z0-9-]+)\.html"', text))
    component_modules = {p.stem for p in (ROOT / "js" / "components").glob("*.js")}
    exclusions = {"dynamic-content-helpers"}

    missing_from_overview = sorted((component_modules - exclusions) - overview_names)
    for name in missing_from_overview:
        findings.append(
            Finding(
                rel(overview),
                f"components overview missing module doc link: components/{name}.html",
            )
        )

    return findings


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
    search_urls = extract_search_urls()

    findings: list[Finding] = []
    findings.extend(audit_footer_consistency(docs_files))
    findings.extend(audit_search_toggles(docs_files))
    findings.extend(audit_scaffold_comments(docs_files))
    findings.extend(audit_semantic_compliance(docs_files))
    findings.extend(audit_search_urls(search_urls))
    findings.extend(audit_component_parity())
    findings.extend(audit_components_overview_parity())

    print("Axiom01 pre-release audit")
    print(f"- docs HTML files scanned: {len(docs_files)}")
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
