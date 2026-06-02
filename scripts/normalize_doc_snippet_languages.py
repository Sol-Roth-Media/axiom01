#!/usr/bin/env python3
"""Add conservative Prism language classes to docs <pre><code> snippets."""

from __future__ import annotations

from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT / "docs"

CODE_BLOCK_RE = re.compile(
    r'(<pre\b[^>]*>\s*<code\b)([^>]*)(>)(.*?)(</code>\s*</pre>)',
    re.IGNORECASE | re.DOTALL,
)
CLASS_ATTR_RE = re.compile(r'class\s*=\s*(["\'])(.*?)\1', re.IGNORECASE | re.DOTALL)


def detect_language(code_text: str) -> str | None:
    text = code_text.strip().lower()
    compact = re.sub(r"\s+", " ", text)

    shell_markers = (
        "npm ",
        "npx ",
        "pnpm ",
        "yarn ",
        "pip ",
        "python ",
        "python3 ",
        "git ",
        "curl ",
        "wget ",
        "node ",
        "cd ",
        "ls ",
        "./",
        "bash ",
        "zsh ",
    )
    if text.startswith("$ ") or text.startswith("> ") or any(compact.startswith(m) for m in shell_markers):
        return "bash"

    if "&lt;" in text and "&gt;" in text:
        return "html"

    # Strong JavaScript signal detection before CSS fallback.
    js_signals = (
        "const ",
        "let ",
        "function ",
        "=>",
        "document.",
        "window.",
        "addeventlistener",
        "queryselector",
        "import ",
        "export ",
        "class ",
        "//",
    )
    if any(signal in text for signal in js_signals):
        return "javascript"

    # Object literal snippets are commonly JavaScript examples in docs.
    if text.startswith("{") and "}" in text and ":" in text and "," in text:
        return "javascript"

    css_signals = (
        ":root",
        "--a-",
        "color:",
        "background:",
        "font-size:",
        "@media",
        "@keyframes",
        "html[data-theme",
        ".",
        "#",
    )
    if "{" in text and "}" in text and ";" in text and any(signal in text for signal in css_signals):
        return "css"

    return None


def append_language_class(attrs: str, language: str) -> tuple[str, bool]:
    match = CLASS_ATTR_RE.search(attrs)
    if match:
        classes = match.group(2).split()
        existing_language = next((item for item in classes if item.startswith("language-")), None)
        if existing_language:
            if existing_language == f"language-{language}":
                return attrs, False

            # Only auto-correct class when current class is likely wrong and
            # detection is clear JavaScript.
            if language == "javascript" and existing_language in {"language-css", "language-html"}:
                classes = [item for item in classes if not item.startswith("language-")]
                classes.append(f"language-{language}")
                replacement = f'class={match.group(1)}{" ".join(classes)}{match.group(1)}'
                return attrs[: match.start()] + replacement + attrs[match.end() :], True

            return attrs, False

        classes.append(f"language-{language}")
        replacement = f'class={match.group(1)}{" ".join(classes)}{match.group(1)}'
        return attrs[: match.start()] + replacement + attrs[match.end() :], True

    return attrs + f' class="language-{language}"', True


def process_file(path: Path) -> tuple[bool, list[str]]:
    original = path.read_text(encoding="utf-8")
    changed_languages: list[str] = []

    def replace(match: re.Match[str]) -> str:
        open_tag, attrs, close_angle, code_text, tail = match.groups()
        language = detect_language(code_text)
        if not language:
            return match.group(0)

        new_attrs, changed = append_language_class(attrs, language)
        if not changed:
            return match.group(0)

        changed_languages.append(language)
        return f"{open_tag}{new_attrs}{close_angle}{code_text}{tail}"

    updated = CODE_BLOCK_RE.sub(replace, original)
    if updated == original:
        return False, []

    path.write_text(updated, encoding="utf-8")
    return True, changed_languages


def main() -> int:
    changed_files: list[str] = []
    language_hits: list[str] = []

    for file_path in sorted(DOCS_DIR.rglob("*.html")):
        changed, languages = process_file(file_path)
        if not changed:
            continue
        changed_files.append(str(file_path.relative_to(ROOT)))
        language_hits.extend(languages)

    by_language = {
        "html": language_hits.count("html"),
        "css": language_hits.count("css"),
        "javascript": language_hits.count("javascript"),
        "bash": language_hits.count("bash"),
    }

    print(f"changed files: {len(changed_files)}")
    print(f"updated snippets: {len(language_hits)}")
    print(f"by language: {by_language}")
    for file_name in changed_files[:30]:
        print(f" - {file_name}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())


