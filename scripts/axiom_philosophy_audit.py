#!/usr/bin/env python3
"""Axiom01 philosophy audit report.

This script provides a strict naming and structure report for docs pages:
- classes containing '-' (dash)
- class attributes containing multiple classes
- BEM/modifier patterns in class names
- inline onclick handlers

Use this as a migration report while moving toward stricter semantic markup.
"""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import re
import sys


ROOT = Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT / "docs"


@dataclass
class AuditTotals:
    files_scanned: int = 0
    dash_classes: int = 0
    multi_class_attrs: int = 0
    bem_classes: int = 0
    modifier_classes: int = 0
    inline_onclick: int = 0


def collect_docs_html() -> list[Path]:
    return sorted(DOCS_DIR.rglob("*.html"))


def rel(path: Path) -> str:
    try:
        return str(path.relative_to(ROOT))
    except ValueError:
        return str(path)


def audit_file(path: Path) -> tuple[AuditTotals, list[str]]:
    totals = AuditTotals(files_scanned=1)
    findings: list[str] = []

    text = path.read_text(encoding="utf-8", errors="ignore")
    class_attr_rx = re.compile(r'class="([^"]+)"')

    if "onclick=" in text:
        totals.inline_onclick += text.count("onclick=")
        findings.append(f"{rel(path)}: contains inline onclick handlers")

    for class_attr in class_attr_rx.findall(text):
        classes = class_attr.split()
        if len(classes) > 1:
            totals.multi_class_attrs += 1

        for class_name in classes:
            if "-" in class_name:
                totals.dash_classes += 1
            if "__" in class_name:
                totals.bem_classes += 1
            if "--" in class_name:
                totals.modifier_classes += 1

    return totals, findings


def main() -> int:
    files = collect_docs_html()
    grand = AuditTotals()
    findings: list[str] = []

    for path in files:
        totals, file_findings = audit_file(path)
        grand.files_scanned += totals.files_scanned
        grand.dash_classes += totals.dash_classes
        grand.multi_class_attrs += totals.multi_class_attrs
        grand.bem_classes += totals.bem_classes
        grand.modifier_classes += totals.modifier_classes
        grand.inline_onclick += totals.inline_onclick
        findings.extend(file_findings)

    print("Axiom01 philosophy audit")
    print(f"- docs HTML files scanned: {grand.files_scanned}")
    print(f"- class tokens with dashes: {grand.dash_classes}")
    print(f"- multi-class attributes: {grand.multi_class_attrs}")
    print(f"- BEM tokens (__): {grand.bem_classes}")
    print(f"- modifier tokens (--): {grand.modifier_classes}")
    print(f"- inline onclick handlers: {grand.inline_onclick}")

    if findings:
        print("- flagged files:")
        for item in findings:
            print(f"  - {item}")

    # This report is informational for migration planning.
    return 0


if __name__ == "__main__":
    sys.exit(main())

