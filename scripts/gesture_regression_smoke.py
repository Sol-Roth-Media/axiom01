#!/usr/bin/env python3
"""Gesture-focused smoke checks for high-risk interaction components."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
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


def require(path: Path, marker: str, findings: list[Finding], label: str | None = None) -> None:
    text = read(path)
    if marker not in text:
        findings.append(Finding(rel(path), f"missing marker: {label or marker}"))


def check_component_files(findings: list[Finding]) -> None:
    components = ROOT / "js" / "components"
    required_modules = ["swipecards.js", "pullrefresh.js", "touch.js"]
    for module_name in required_modules:
        if not (components / module_name).exists():
            findings.append(Finding(rel(components), f"missing gesture component module: {module_name}"))


def check_component_contracts(findings: list[Finding]) -> None:
    contracts = {
        ROOT / "js" / "components" / "swipecards.js": ["init(element)", "destroy()", "touchstart", "touchend"],
        ROOT / "js" / "components" / "pullrefresh.js": ["init(element)", "destroy()", "touchstart", "touchmove"],
        ROOT / "js" / "components" / "touch.js": ["init(element)", "destroy()", "touchstart"],
    }
    for path, markers in contracts.items():
        text = read(path)
        for marker in markers:
            if marker not in text:
                findings.append(Finding(rel(path), f"missing lifecycle marker: {marker}"))


def check_docs_markers(findings: list[Finding]) -> None:
    docs_checks = {
        ROOT / "docs" / "components" / "swiping-card-interface.html": [
            'data-component="swipecards"',
        ],
        ROOT / "docs" / "components" / "pull-to-refresh.html": [
            'data-component="pullrefresh"',
        ],
        ROOT / "docs" / "components" / "touch-components.html": [
            'data-component="touch"',
        ],
    }
    for path, markers in docs_checks.items():
        text = read(path)
        for marker in markers:
            if marker not in text:
                findings.append(Finding(rel(path), f"missing gesture-doc marker: {marker}"))


def check_component_overview_links(findings: list[Finding]) -> None:
    overview = ROOT / "docs" / "components-overview.html"
    text = read(overview)
    expected_hrefs = [
        "components/swiping-card-interface.html",
        "components/pull-to-refresh.html",
        "components/touch-components.html",
    ]
    for href in expected_hrefs:
        if href not in text:
            findings.append(Finding(rel(overview), f"missing component overview link: {href}"))


def check_search_data(findings: list[Finding]) -> None:
    search_data = ROOT / "js" / "index-page-manager.js"
    text = read(search_data)
    expected_urls = [
        'url: "docs/components/swiping-card-interface.html"',
        'url: "docs/components/pull-to-refresh.html"',
        'url: "docs/components/touch-components.html"',
    ]
    for marker in expected_urls:
        if marker not in text:
            findings.append(Finding(rel(search_data), f"missing searchData gesture URL marker: {marker}"))


def main() -> int:
    findings: list[Finding] = []
    check_component_files(findings)
    check_component_contracts(findings)
    check_docs_markers(findings)
    check_component_overview_links(findings)
    check_search_data(findings)

    print("Axiom01 gesture regression smoke")
    if not findings:
        print("- result: PASS")
        return 0

    print(f"- result: FAIL ({len(findings)} findings)")
    for finding in findings:
        print(f"  - {finding.scope}: {finding.message}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
