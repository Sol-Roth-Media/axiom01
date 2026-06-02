#!/usr/bin/env python3
"""Sync and verify Drupal starter-theme runtime assets."""

from __future__ import annotations

from pathlib import Path
import argparse
import shutil
import sys


ROOT = Path(__file__).resolve().parents[1]
ASSET_PAIRS = (
    (ROOT / "css" / "axiom.min.css", ROOT / "starter-themes" / "axiom01-drupal11-starter-theme" / "dist" / "css" / "axiom.min.css"),
    (ROOT / "js" / "axiom.min.js", ROOT / "starter-themes" / "axiom01-drupal11-starter-theme" / "dist" / "js" / "axiom.min.js"),
)


def ensure_exists(path: Path) -> None:
    if not path.exists():
        raise FileNotFoundError(f"Missing required file: {path}")


def sync_assets() -> int:
    for source, target in ASSET_PAIRS:
        ensure_exists(source)
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)
        print(f"synced: {target.relative_to(ROOT)}")
    return 0


def check_assets() -> int:
    failures: list[str] = []
    for source, target in ASSET_PAIRS:
        ensure_exists(source)
        ensure_exists(target)
        if source.read_bytes() != target.read_bytes():
            failures.append(
                f"{target.relative_to(ROOT)} does not match {source.relative_to(ROOT)}"
            )

    if failures:
        print("Drupal starter-theme asset parity check: FAIL")
        for failure in failures:
            print(f"- {failure}")
        print("Run: npm run sync:drupal-assets")
        return 1

    print("Drupal starter-theme asset parity check: PASS")
    return 0


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="verify parity only")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    try:
        return check_assets() if args.check else sync_assets()
    except FileNotFoundError as error:
        print(str(error), file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
