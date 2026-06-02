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
SEARCH_SOURCE = ROOT / "js" / "index-page-manager.js"
SEMANTIC_STRICT_DOCS = {
    "docs/components-overview.html",
    "docs/components-simple.html",
    "docs/components-advanced.html",
    "docs/components-category-view.html",
    "docs/integrations.html",
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
        is_semantic_strict_doc = rel(file_path) in SEMANTIC_STRICT_DOCS

        # Inline handlers are easy to slip into examples and bypass component cleanup patterns.
        if "onclick=" in text:
            findings.append(Finding(rel(file_path), "contains inline onclick handler; use bound listeners in scripts"))

        for tag_name, attrs, line_number in parser.tags:
            if is_semantic_strict_doc and "style" in attrs and attrs["style"].strip():
                details = f"contains inline style attribute on <{tag_name}>"
                if line_number:
                    details += f" (line {line_number})"
                findings.append(Finding(rel(file_path), details))

            if attrs.get("role") == "button" and tag_name in non_semantic_button_tags:
                details = f"non-semantic interactive pattern: <{tag_name} role=\"button\">; prefer <button>"
                if line_number:
                    details += f" (line {line_number})"
                findings.append(Finding(rel(file_path), details))

        for class_value in class_attr_rx.findall(text):
            for cls in class_value.split():
                if cls.startswith("doc-"):
                    findings.append(Finding(rel(file_path), f"forbidden doc-* class found: {cls}"))

                if "__" in cls:
                    findings.append(Finding(rel(file_path), f"BEM-style class found: {cls}"))

                if "--" in cls:
                    findings.append(Finding(rel(file_path), f"modifier-style class found: {cls}"))

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
    search_urls = extract_search_urls()

    findings: list[Finding] = []
    findings.extend(audit_footer_consistency(docs_files))
    findings.extend(audit_search_toggles(docs_files))
    findings.extend(audit_scaffold_comments(docs_files))
    findings.extend(audit_semantic_compliance(docs_files))
    findings.extend(audit_search_urls(search_urls))

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
