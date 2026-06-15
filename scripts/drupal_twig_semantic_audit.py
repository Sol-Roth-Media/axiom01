#!/usr/bin/env python3
"""Guard starter-theme Twig templates against new class-shape regressions."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
TWIG_TEMPLATES_DIR = ROOT / "starter-themes" / "axiom01-drupal11-starter-theme" / "templates"
MULTI_DASH_CLASS_RX = re.compile(r"[a-z0-9]+(?:-[a-z0-9]+){2,}")
CLASS_TOKEN_RX = re.compile(r'class\s*=\s*"([^"]+)"')
SAFE_MODIFIER_PREFIXES = ("messages--",)
SAFE_BEM_PREFIXES = ("messages__",)
SAFE_MULTI_DASH_PREFIXES = ("visually-hidden",)


@dataclass
class Finding:
    scope: str
    message: str


def rel(path: Path) -> str:
    try:
        return str(path.relative_to(ROOT))
    except ValueError:
        return str(path)


def audit_twig_templates() -> list[Finding]:
    findings: list[Finding] = []
    for path in sorted(TWIG_TEMPLATES_DIR.rglob("*.twig")):
        text = path.read_text(encoding="utf-8", errors="ignore")
        for class_group in CLASS_TOKEN_RX.findall(text):
            for token in class_group.split():
                if "{{" in token or "{%" in token:
                    continue

                if "__" in token and not token.startswith(SAFE_BEM_PREFIXES):
                    findings.append(Finding(rel(path), f"disallowed BEM-style class token: {token}"))

                if "--" in token and not token.startswith(SAFE_MODIFIER_PREFIXES):
                    findings.append(Finding(rel(path), f"disallowed modifier-style class token: {token}"))

                if MULTI_DASH_CLASS_RX.search(token) and not token.startswith(SAFE_MULTI_DASH_PREFIXES):
                    findings.append(Finding(rel(path), f"disallowed multi-dash utility-style class token: {token}"))
    return findings


def main() -> int:
    findings = audit_twig_templates()
    print("Axiom01 Drupal Twig semantic audit")
    print(f"- templates scanned: {len(list(TWIG_TEMPLATES_DIR.rglob('*.twig')))}")
    if not findings:
        print("- result: PASS")
        return 0

    print(f"- result: FAIL ({len(findings)} findings)")
    for finding in findings:
        print(f"  - {finding.scope}: {finding.message}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
