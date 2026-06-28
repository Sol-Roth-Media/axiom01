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


def copy_tree_required(src: Path, dst: Path) -> None:
    if not src.exists() or not src.is_dir():
        raise BuildError(f"Missing required source directory: {src}")
    if dst.exists():
        shutil.rmtree(dst)
    shutil.copytree(src, dst)


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
        # Build npm/release artifacts.
        ensure_dir(DIST / "css")
        ensure_dir(DIST / "js")

        copy_required(ROOT / "css" / "axiom.min.css", DIST / "css" / "axiom.min.css")
        copy_required(ROOT / "js" / "axiom.min.js", DIST / "js" / "axiom.min.js")

        readme_src = ROOT / "README.md"
        readme_dst = DIST / "README.md"
        copy_required(readme_src, readme_dst)
        copy_required(ROOT / "DEVELOPER.md", DIST / "DEVELOPER.md")
        copy_required(ROOT / "LICENSE", DIST / "LICENSE")
        copy_required(ROOT / "AXIOM01_STYLING_GUIDE.md", DIST / "AXIOM01_STYLING_GUIDE.md")
        copy_required(ROOT / "release-info.json", DIST / "release-info.json")
        copy_required(ROOT / "CNAME", DIST / "CNAME")

        version = package_version()
        (DIST / "version.txt").write_text(f"{version}\n", encoding="utf-8")

        # Build static website payload for gh-pages deployment.
        copy_required(ROOT / "index.html", DIST / "index.html")
        copy_required(ROOT / "index.js", DIST / "index.js")
        copy_tree_required(ROOT / "assets", DIST / "assets")
        copy_tree_required(ROOT / "favicon", DIST / "favicon")
        copy_tree_required(ROOT / "docs", DIST / "docs")
        copy_tree_required(ROOT / "css", DIST / "css")
        copy_tree_required(ROOT / "js", DIST / "js")
        copy_required(ROOT / "AXIOM01_STYLING_GUIDE.md", DIST / "docs" / "AXIOM01_STYLING_GUIDE.md")

        print("Built release dist artifacts:")
        print(f"- {DIST / 'index.html'}")
        print(f"- {DIST / 'css' / 'axiom.min.css'}")
        print(f"- {DIST / 'js' / 'axiom.min.js'}")
        print(f"- {DIST / 'docs'}")
        print(f"- {DIST / 'release-info.json'}")
        print(f"- {DIST / 'README.md'}")
        print(f"- {DIST / 'version.txt'}")
        return 0
    except BuildError as error:
        print(f"Build error: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
