#!/usr/bin/env python3
"""Lightweight pre-release audit for docs/search consistency."""

from __future__ import annotations

from dataclasses import dataclass
from html.parser import HTMLParser
from pathlib import Path
import re
import sys


ROOT = Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT / "docs"
COMPONENT_DOCS_DIR = DOCS_DIR / "components"
COMPONENTS_DIR = ROOT / "js" / "components"
COMPONENTS_OVERVIEW = DOCS_DIR / "components-overview.html"
SEARCH_SOURCE = ROOT / "js" / "index-page-manager.js"
INDEX_HTML = ROOT / "index.html"
SEMANTIC_STRICT_DOCS = {
    "docs/components-overview.html",
    "docs/components-simple.html",
    "docs/components-advanced.html",
    "docs/components-category-view.html",
    "docs/integrations.html",
}
SEMANTIC_ACTION_STRICT_FILES = SEMANTIC_STRICT_DOCS | {
    "docs/components/dropdown.html",
    "index.html",
}
CLASS_BUDGETS = {
    "docs/components-overview.html": {"max_multi_class_attrs": 8, "max_class_tokens": 34},
    "docs/components-simple.html": {"max_multi_class_attrs": 14, "max_class_tokens": 56},
    "docs/components-advanced.html": {"max_multi_class_attrs": 14, "max_class_tokens": 58},
    "docs/components-category-view.html": {"max_multi_class_attrs": 8, "max_class_tokens": 40},
    "docs/integrations.html": {"max_multi_class_attrs": 8, "max_class_tokens": 40},
}
MULTI_DASH_CLASS_RX = re.compile(r"[a-z0-9]+(?:-[a-z0-9]+){2,}")
IGNORED_MULTI_DASH_CLASS_PREFIXES = ("fa-",)
COMPONENT_PARITY_EXCLUDES = {"dynamic-content-helpers"}
COMPONENT_DOC_OVERRIDES = {
    "filedisplay": "file-display-download",
    "multimediapicker": "multimedia-picker",
    "pullrefresh": "pull-to-refresh",
    "storyview": "story-view",
    "swipecards": "swiping-card-interface",
    "timer": "stopwatch-countdown",
    "touch": "touch-components",
}
COMPONENT_CLASS_CHAIN_BASELINES = {
    "docs/components/alert.html": 4,
    "docs/components/badge.html": 4,
    "docs/components/card.html": 6,
    "docs/components/drawer.html": 2,
    "docs/components/dropdown.html": 8,
    "docs/components/hero.html": 4,
    "docs/components/multi-step-form.html": 9,
    "docs/components/navigation.html": 2,
    "docs/components/pagination.html": 2,
    "docs/components/tooltip.html": 6,
}


@dataclass
class Finding:
    scope: str
    message: str


class StartTagCollector(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.tags: list[tuple[str, dict[str, str], int | None]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        normalized = {name: (value or "") for name, value in attrs}
        self.tags.append((tag, normalized, self.getpos()[0]))


def rel(path: Path) -> str:
    try:
        return str(path.relative_to(ROOT))
    except ValueError:
        return str(path)


def collect_docs_html() -> list[Path]:
    return sorted(DOCS_DIR.rglob("*.html"))


def collect_semantic_html() -> list[Path]:
    files = collect_docs_html()
    if INDEX_HTML.exists():
        files.append(INDEX_HTML)
    return files


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
    non_semantic_button_tags = {"div", "span", "p", "li", "section", "article"}

    for file_path in files:
        text = file_path.read_text(encoding="utf-8", errors="ignore")
        parser = StartTagCollector()
        parser.feed(text)
        parser.close()
        relative_path = rel(file_path)
        is_semantic_strict_doc = relative_path in SEMANTIC_STRICT_DOCS
        is_component_doc = relative_path.startswith("docs/components/")
        class_tokens_total = 0
        multi_class_attrs_total = 0
        component_class_chains_over_two = 0
        component_first_class_chain: str | None = None

        # Inline handlers are easy to slip into examples and bypass component cleanup patterns.
        if "onclick=" in text:
            findings.append(Finding(relative_path, "contains inline onclick handler; use bound listeners in scripts"))

        for tag_name, attrs, line_number in parser.tags:
            if is_semantic_strict_doc and "style" in attrs and attrs["style"].strip():
                details = f"contains inline style attribute on <{tag_name}>"
                if line_number:
                    details += f" (line {line_number})"
                findings.append(Finding(relative_path, details))

            if attrs.get("role") == "button" and tag_name in non_semantic_button_tags:
                details = f"non-semantic interactive pattern: <{tag_name} role=\"button\">; prefer <button>"
                if line_number:
                    details += f" (line {line_number})"
                findings.append(Finding(relative_path, details))

            if (
                relative_path in SEMANTIC_ACTION_STRICT_FILES
                and tag_name == "a"
                and attrs.get("href", "").strip() == "#"
            ):
                details = "non-semantic action anchor: <a href=\"#\">; use <button type=\"button\"> for actions"
                if line_number:
                    details += f" (line {line_number})"
                findings.append(Finding(relative_path, details))

        for class_value in class_attr_rx.findall(text):
            class_tokens = class_value.split()
            class_tokens_total += len(class_tokens)
            if len(class_tokens) > 1:
                multi_class_attrs_total += 1
            if is_semantic_strict_doc and len(class_tokens) > 2:
                findings.append(
                    Finding(
                        relative_path,
                        f"class chain too deep ({len(class_tokens)} classes); keep strict docs at two class tokens max per element",
                    )
                )
            if is_component_doc and len(class_tokens) > 2:
                component_class_chains_over_two += 1
                if component_first_class_chain is None:
                    component_first_class_chain = class_value

            for cls in class_tokens:
                if cls.startswith("doc-"):
                    findings.append(Finding(relative_path, f"forbidden doc-* class found: {cls}"))

                if "__" in cls:
                    findings.append(Finding(relative_path, f"BEM-style class found: {cls}"))

                if "--" in cls:
                    findings.append(Finding(relative_path, f"modifier-style class found: {cls}"))

                if (
                    is_semantic_strict_doc
                    and MULTI_DASH_CLASS_RX.search(cls)
                    and not cls.startswith(IGNORED_MULTI_DASH_CLASS_PREFIXES)
                ):
                    findings.append(Finding(relative_path, f"multi-dash utility-style class found: {cls}"))

        if relative_path in CLASS_BUDGETS:
            budget = CLASS_BUDGETS[relative_path]
            if multi_class_attrs_total > budget["max_multi_class_attrs"]:
                findings.append(
                    Finding(
                        relative_path,
                        (
                            "class-budget exceeded for multi-class attributes: "
                            f"{multi_class_attrs_total} > {budget['max_multi_class_attrs']}"
                        ),
                    )
                )
            if class_tokens_total > budget["max_class_tokens"]:
                findings.append(
                    Finding(
                        relative_path,
                        f"class-budget exceeded for class tokens: {class_tokens_total} > {budget['max_class_tokens']}",
                    )
                )

        if is_component_doc:
            baseline = COMPONENT_CLASS_CHAIN_BASELINES.get(relative_path, 0)
            if component_class_chains_over_two > baseline:
                details = (
                    "component class-chain baseline exceeded for >2-class attributes: "
                    f"{component_class_chains_over_two} > {baseline}"
                )
                if component_first_class_chain:
                    details += (
                        f"; autofix suggestion: reduce class chain to two tokens where possible "
                        f"(example found: '{component_first_class_chain}')"
                    )
                findings.append(Finding(relative_path, details))

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


def extract_components_overview_slugs() -> set[str]:
    text = COMPONENTS_OVERVIEW.read_text(encoding="utf-8", errors="ignore")
    return set(re.findall(r'href="components/([a-z0-9-]+)\.html"', text))


def extract_search_component_slugs(urls: list[str]) -> set[str]:
    slugs: set[str] = set()
    for url in urls:
        path_part = url.split("?", 1)[0].lstrip("./")
        if path_part.startswith("docs/components/") and path_part.endswith(".html"):
            slugs.add(Path(path_part).stem)
    return slugs


def expected_component_doc_slugs() -> set[str]:
    slugs: set[str] = set()
    for module_path in sorted(COMPONENTS_DIR.glob("*.js")):
        module_name = module_path.stem
        if module_name in COMPONENT_PARITY_EXCLUDES:
            continue
        slugs.add(COMPONENT_DOC_OVERRIDES.get(module_name, module_name))
    return slugs


def audit_component_parity(search_urls: list[str]) -> list[Finding]:
    findings: list[Finding] = []
    expected_slugs = expected_component_doc_slugs()
    overview_slugs = extract_components_overview_slugs()
    search_slugs = extract_search_component_slugs(search_urls)
    existing_component_docs = {path.stem for path in COMPONENT_DOCS_DIR.glob("*.html")}

    missing_overview = sorted(expected_slugs - overview_slugs)
    for slug in missing_overview:
        findings.append(
            Finding(
                "docs/components-overview.html",
                f"component parity drift: missing module-backed component link in overview -> components/{slug}.html",
            )
        )

    missing_search = sorted(expected_slugs - search_slugs)
    for slug in missing_search:
        findings.append(
            Finding(
                "js/index-page-manager.js",
                f"component parity drift: missing module-backed searchData URL -> docs/components/{slug}.html",
            )
        )

    stale_overview = sorted(overview_slugs - existing_component_docs)
    for slug in stale_overview:
        findings.append(
            Finding(
                "docs/components-overview.html",
                f"components-overview links missing component page file: components/{slug}.html",
            )
        )

    missing_docs = sorted(expected_slugs - existing_component_docs)
    for slug in missing_docs:
        findings.append(
            Finding(
                "docs/components",
                f"module-backed component doc file is missing: docs/components/{slug}.html",
            )
        )

    return findings


def main() -> int:
    docs_files = collect_docs_html()
    semantic_files = collect_semantic_html()
    search_urls = extract_search_urls()

    findings: list[Finding] = []
    findings.extend(audit_footer_consistency(docs_files))
    findings.extend(audit_search_toggles(docs_files))
    findings.extend(audit_scaffold_comments(docs_files))
    findings.extend(audit_semantic_compliance(semantic_files))
    findings.extend(audit_search_urls(search_urls))
    findings.extend(audit_component_parity(search_urls))

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
