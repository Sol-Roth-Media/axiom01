#!/usr/bin/env python3
"""Critical interaction smoke checks for Axiom01."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]


@dataclass
class Finding:
    scope: str
    message: str


def rel(path: Path) -> str:
    try:
        return str(path.relative_to(ROOT))
    except ValueError:
        return str(path)


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="ignore")


def check_index_toggles(findings: list[Finding]) -> None:
    index = ROOT / "index.html"
    text = read(index)
    required_markers = [
        'class="search-toggle"',
        'id="theme-toggle"',
        'class="menu-toggle"',
        'src="js/index-page-manager.js"',
        'data-component="mobile-navbar"',
    ]
    for marker in required_markers:
        if marker not in text:
            findings.append(Finding(rel(index), f"missing marker: {marker}"))


def check_component_modules(findings: list[Finding]) -> None:
    components_dir = ROOT / "js" / "components"
    expected = {
        "mobile-navbar.js",
        "dropdown.js",
        "accordion.js",
        "search.js",
        "tooltip.js",
    }
    present = {p.name for p in components_dir.glob("*.js")}
    missing = sorted(expected - present)
    for item in missing:
        findings.append(Finding(rel(components_dir), f"missing core component module: {item}"))


def check_docs_pages_manager(findings: list[Finding]) -> None:
    docs_dir = ROOT / "docs"
    rx_toggle = re.compile(r'class="[^"]*(?:search-toggle|theme-toggle|menu-toggle)[^"]*"')
    rx_manager = re.compile(r'src="(?:\.\./|\.\./\.\./)js/index-page-manager\.js"')

    for file_path in sorted(docs_dir.rglob("*.html")):
        text = read(file_path)
        if rx_toggle.search(text) and not rx_manager.search(text):
            findings.append(Finding(rel(file_path), "toggle controls exist but index-page-manager.js is not loaded"))


def main() -> int:
    findings: list[Finding] = []
    check_index_toggles(findings)
    check_component_modules(findings)
    check_docs_pages_manager(findings)

    print("Axiom01 critical interaction smoke")
    if not findings:
        print("- result: PASS")
        return 0

    print(f"- result: FAIL ({len(findings)} findings)")
    for finding in findings:
        print(f"  - {finding.scope}: {finding.message}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
