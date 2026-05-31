#!/usr/bin/env python3
"""Runtime-loader syntax and API gate."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import re
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
RUNTIME_LOADER = ROOT / "js" / "axiom.js"


@dataclass
class Finding:
    scope: str
    message: str


def check_syntax(findings: list[Finding]) -> None:
    result = subprocess.run(
        ["node", "--check", str(RUNTIME_LOADER)],
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        details = (result.stderr or result.stdout).strip() or "unknown syntax error"
        findings.append(Finding("js/axiom.js", f"node --check failed: {details}"))


def check_required_markers(findings: list[Finding]) -> None:
    text = RUNTIME_LOADER.read_text(encoding="utf-8", errors="ignore")
    required = [
        "registerComponent(",
        "loadComponent(",
        "import(componentPath)",
        "destroyComponent(",
        "destroyAllComponents(",
    ]
    for marker in required:
        if marker not in text:
            findings.append(Finding("js/axiom.js", f"missing runtime-loader marker: {marker}"))


def check_import_failure_fallback(findings: list[Finding]) -> None:
    text = RUNTIME_LOADER.read_text(encoding="utf-8", errors="ignore")

    import_failure_rx = re.compile(
        r"async\s+loadComponent\(componentName\)\s*{[\s\S]*?"
        r"const\s+componentPath\s*=\s*`\.\/components\/\$\{componentName\}\.js`[\s\S]*?"
        r"const\s+module\s*=\s*await\s+import\(componentPath\);[\s\S]*?"
        r"catch\s*\(error\)\s*{[\s\S]*?"
        r"Failed to load component\s+\$\{componentName\}[\s\S]*?"
        r"return\s+null;\s*}",
        re.MULTILINE,
    )
    if not import_failure_rx.search(text):
        findings.append(
            Finding(
                "js/axiom.js",
                "missing focused fallback path for dynamic import failure in loadComponent()",
            )
        )

    init_guard_rx = re.compile(
        r"await\s+Promise\.all\(loadPromises\);[\s\S]*?if\s*\(componentName\s*&&\s*ComponentDefinition\)",
        re.MULTILINE,
    )
    if not init_guard_rx.search(text):
        findings.append(
            Finding(
                "js/axiom.js",
                "missing init fallback guard that skips component startup when import fails",
            )
        )


def main() -> int:
    findings: list[Finding] = []
    check_syntax(findings)
    check_required_markers(findings)
    check_import_failure_fallback(findings)

    print("Axiom01 runtime-loader syntax gate")
    if not findings:
        print("- result: PASS")
        return 0

    print(f"- result: FAIL ({len(findings)} findings)")
    for finding in findings:
        print(f"  - {finding.scope}: {finding.message}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
