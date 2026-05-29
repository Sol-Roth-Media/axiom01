#!/usr/bin/env python3
"""Lightweight accessibility smoke checks for HTML docs/pages."""

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


def check_html_basics(file_path: Path, text: str, findings: list[Finding]) -> None:
    if "<html" not in text or " lang=" not in text:
        findings.append(Finding(rel(file_path), "missing html lang attribute"))
    if '<meta name="viewport"' not in text:
        findings.append(Finding(rel(file_path), "missing viewport meta tag"))


def check_images_alt(file_path: Path, text: str, findings: list[Finding]) -> None:
    for match in re.finditer(r"<img\b[^>]*>", text, flags=re.IGNORECASE):
        tag = match.group(0)
        if re.search(r'\balt\s*=\s*"[^"]*"', tag, flags=re.IGNORECASE) is None:
            findings.append(Finding(rel(file_path), f"image tag missing alt attribute: {tag[:80]}"))


def main() -> int:
    findings: list[Finding] = []
    html_files = [ROOT / "index.html", *sorted((ROOT / "docs").rglob("*.html"))]

    for file_path in html_files:
        text = read(file_path)
        check_html_basics(file_path, text, findings)
        check_images_alt(file_path, text, findings)

    print("Axiom01 accessibility smoke")
    print(f"- files scanned: {len(html_files)}")
    if not findings:
        print("- result: PASS")
        return 0

    print(f"- result: FAIL ({len(findings)} findings)")
    for finding in findings[:50]:
        print(f"  - {finding.scope}: {finding.message}")
    if len(findings) > 50:
        print(f"  - ... {len(findings)-50} more findings")
    return 1


if __name__ == "__main__":
    sys.exit(main())
