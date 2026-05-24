#!/usr/bin/env python3
"""Build dist artifacts used by release automation."""

from __future__ import annotations

from pathlib import Path
import json
import shutil
import sys


ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"


class BuildError(Exception):
    pass


def ensure_dir(path: Path) -> None:
    path.mkdir(parents=True, exist_ok=True)


def copy_required(src: Path, dst: Path) -> None:
    if not src.exists():
        raise BuildError(f"Missing required source file: {src}")
    ensure_dir(dst.parent)
    shutil.copy2(src, dst)


def package_version() -> str:
    package_json = ROOT / "package.json"
    if not package_json.exists():
        raise BuildError("Missing package.json")

    data = json.loads(package_json.read_text(encoding="utf-8"))
    version = data.get("version")
    if not version:
        raise BuildError("package.json is missing a version")
    return str(version)


def main() -> int:
    try:
        if DIST.exists():
            shutil.rmtree(DIST)
        ensure_dir(DIST / "css")
        ensure_dir(DIST / "js")

        copy_required(ROOT / "css" / "axiom.min.css", DIST / "css" / "axiom.min.css")
        copy_required(ROOT / "js" / "axiom.min.js", DIST / "js" / "axiom.min.js")

        readme_src = ROOT / "readme.md"
        readme_dst = DIST / "README.md"
        copy_required(readme_src, readme_dst)

        version = package_version()
        (DIST / "version.txt").write_text(f"{version}\n", encoding="utf-8")

        print("Built release dist artifacts:")
        print(f"- {DIST / 'css' / 'axiom.min.css'}")
        print(f"- {DIST / 'js' / 'axiom.min.js'}")
        print(f"- {DIST / 'README.md'}")
        print(f"- {DIST / 'version.txt'}")
        return 0
    except BuildError as error:
        print(f"Build error: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())

