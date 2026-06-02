#!/usr/bin/env python3
"""Focused runtime-loader fallback and failure-path smoke checks."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
RUNTIME_LOADER = ROOT / "js" / "axiom.js"


@dataclass
class Finding:
    scope: str
    message: str


def check_pattern(
    findings: list[Finding],
    *,
    pattern: str,
    message: str,
    flags: int = re.MULTILINE | re.DOTALL,
) -> None:
    text = RUNTIME_LOADER.read_text(encoding="utf-8", errors="ignore")
    if not re.search(pattern, text, flags):
        findings.append(Finding("js/axiom.js", message))


def main() -> int:
    findings: list[Finding] = []

    check_pattern(
        findings,
        pattern=r"if\s*\(\s*this\.components\[componentName\]\s*\)\s*\{\s*return this\.components\[componentName\];",
        message="loadComponent should short-circuit to cached component definitions",
    )
    check_pattern(
        findings,
        pattern=r"try\s*\{\s*const module = await import\(componentPath\);",
        message="loadComponent should keep dynamic import inside try block",
    )
    check_pattern(
        findings,
        pattern=r"Component .* does not have a valid default export.*?return null;",
        message="loadComponent should return null for invalid component default export shape",
    )
    check_pattern(
        findings,
        pattern=r"catch\s*\(\s*error\s*\)\s*\{\s*console\.error\(`Axiom: Failed to load component \$\{componentName\}\.`,\s*error\);\s*return null;",
        message="loadComponent should log and return null when dynamic import fails",
    )
    check_pattern(
        findings,
        pattern=r"await Promise\.all\(loadPromises\);",
        message="init should await all component loads before initialization pass",
    )

    print("Axiom01 runtime-loader failure smoke")
    if not findings:
        print("- result: PASS")
        return 0

    print(f"- result: FAIL ({len(findings)} findings)")
    for finding in findings:
        print(f"  - {finding.scope}: {finding.message}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
