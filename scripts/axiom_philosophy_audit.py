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

import argparse
from dataclasses import dataclass
from pathlib import Path
import re
import sys


ROOT = Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT / "docs"
HIGH_PRIORITY_CLASS_THRESHOLDS = {
    "docs/components-overview.html": {"max_multi_class_attrs": 9, "max_class_tokens": 110},
}


@dataclass
class AuditTotals:
    files_scanned: int = 0
    dash_classes: int = 0
    multi_class_attrs: int = 0
    bem_classes: int = 0
    modifier_classes: int = 0
    inline_onclick: int = 0


@dataclass
class FileMetrics:
    path: str
    class_attrs: int = 0
    class_tokens: int = 0
    multi_class_attrs: int = 0
    dashed_tokens: int = 0
    bem_tokens: int = 0
    modifier_tokens: int = 0
    inline_onclick: int = 0


def collect_docs_html() -> list[Path]:
    return sorted(DOCS_DIR.rglob("*.html"))


def rel(path: Path) -> str:
    try:
        return str(path.relative_to(ROOT))
    except ValueError:
        return str(path)


def audit_file(path: Path) -> tuple[AuditTotals, list[str], FileMetrics]:
    totals = AuditTotals(files_scanned=1)
    findings: list[str] = []
    metrics = FileMetrics(path=rel(path))

    text = path.read_text(encoding="utf-8", errors="ignore")
    class_attr_rx = re.compile(r'class="([^"]+)"')

    if "onclick=" in text:
        onclick_count = text.count("onclick=")
        totals.inline_onclick += onclick_count
        metrics.inline_onclick += onclick_count
        findings.append(f"{metrics.path}: contains inline onclick handlers")

    for class_attr in class_attr_rx.findall(text):
        classes = class_attr.split()
        metrics.class_attrs += 1
        metrics.class_tokens += len(classes)
        if len(classes) > 1:
            totals.multi_class_attrs += 1
            metrics.multi_class_attrs += 1

        for class_name in classes:
            if "-" in class_name:
                totals.dash_classes += 1
                metrics.dashed_tokens += 1
            if "__" in class_name:
                totals.bem_classes += 1
                metrics.bem_tokens += 1
            if "--" in class_name:
                totals.modifier_classes += 1
                metrics.modifier_tokens += 1

    return totals, findings, metrics


def enforce_high_priority_thresholds(file_metrics: list[FileMetrics]) -> list[str]:
    findings: list[str] = []
    metrics_by_path = {item.path: item for item in file_metrics}
    for path, limits in HIGH_PRIORITY_CLASS_THRESHOLDS.items():
        metrics = metrics_by_path.get(path)
        if not metrics:
            findings.append(f"{path}: expected high-priority page is missing from docs scan")
            continue

        if metrics.multi_class_attrs > limits["max_multi_class_attrs"]:
            findings.append(
                (
                    f"{path}: multi-class attribute budget exceeded "
                    f"({metrics.multi_class_attrs} > {limits['max_multi_class_attrs']})"
                )
            )
        if metrics.class_tokens > limits["max_class_tokens"]:
            findings.append(
                (
                    f"{path}: class token budget exceeded "
                    f"({metrics.class_tokens} > {limits['max_class_tokens']})"
                )
            )
    return findings


def main() -> int:
    parser = argparse.ArgumentParser(description="Axiom01 philosophy audit")
    parser.add_argument(
        "--enforce",
        action="store_true",
        help="Fail when high-priority docs pages exceed class budget thresholds.",
    )
    args = parser.parse_args()

    files = collect_docs_html()
    grand = AuditTotals()
    findings: list[str] = []
    file_metrics: list[FileMetrics] = []

    for path in files:
        totals, file_findings, metrics = audit_file(path)
        grand.files_scanned += totals.files_scanned
        grand.dash_classes += totals.dash_classes
        grand.multi_class_attrs += totals.multi_class_attrs
        grand.bem_classes += totals.bem_classes
        grand.modifier_classes += totals.modifier_classes
        grand.inline_onclick += totals.inline_onclick
        findings.extend(file_findings)
        file_metrics.append(metrics)

    print("Axiom01 philosophy audit")
    print(f"- docs HTML files scanned: {grand.files_scanned}")
    print(f"- class tokens with dashes: {grand.dash_classes}")
    print(f"- multi-class attributes: {grand.multi_class_attrs}")
    print(f"- BEM tokens (__): {grand.bem_classes}")
    print(f"- modifier tokens (--): {grand.modifier_classes}")
    print(f"- inline onclick handlers: {grand.inline_onclick}")
    print("- top class-density pages:")
    top_offenders = sorted(
        file_metrics,
        key=lambda item: (item.class_tokens, item.multi_class_attrs, item.dashed_tokens),
        reverse=True,
    )[:20]
    for index, offender in enumerate(top_offenders, start=1):
        print(
            f"  {index:>2}. {offender.path} | tokens={offender.class_tokens} "
            f"| multi={offender.multi_class_attrs} | dashed={offender.dashed_tokens}"
        )

    if findings:
        print("- flagged files:")
        for item in findings:
            print(f"  - {item}")

    if not args.enforce:
        # Report-only mode supports migration planning.
        return 0

    enforcement_findings = enforce_high_priority_thresholds(file_metrics)
    if enforcement_findings:
        print("- threshold result: FAIL")
        for item in enforcement_findings:
            print(f"  - {item}")
        return 1

    print("- threshold result: PASS")
    return 0


if __name__ == "__main__":
    sys.exit(main())
