#!/usr/bin/env python3
"""Stamp ?v=ASSET_VERSION on local css/js links in every HTML page.

Usage:
  python3 scripts/bump-assets.py           # new version = YYYYMMDDHHMM
  python3 scripts/bump-assets.py 1.2.3     # custom version
  python3 scripts/bump-assets.py --git     # version = short git sha
  python3 scripts/bump-assets.py --sync    # re-apply current asset-version
"""

from __future__ import annotations

import argparse
import datetime as dt
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
VERSION_FILE = ROOT / "asset-version"
HTML_FILES = sorted(ROOT.glob("*.html"))

# Match local css/js asset URLs in href/src (optional existing ?v=)
ASSET_RE = re.compile(
    r"""(?P<prefix>(?:href|src)=["'])"""
    r"""(?P<path>(?:css|js)/[^"'?]+?\.(?:css|js))"""
    r"""(?:\?v=[^"']*)?"""
    r"""(?P<suffix>["'])"""
)


def read_version() -> str:
    if VERSION_FILE.exists():
        return VERSION_FILE.read_text(encoding="utf-8").strip()
    return ""


def write_version(version: str) -> None:
    VERSION_FILE.write_text(version.strip() + "\n", encoding="utf-8")


def git_short() -> str:
    try:
        out = subprocess.check_output(
            ["git", "rev-parse", "--short", "HEAD"],
            cwd=ROOT,
            text=True,
        ).strip()
        return out or dt.datetime.now().strftime("%Y%m%d%H%M")
    except Exception:
        return dt.datetime.now().strftime("%Y%m%d%H%M")


def stamp_html(version: str) -> int:
    changed = 0

    def repl(match: re.Match[str]) -> str:
        return f'{match.group("prefix")}{match.group("path")}?v={version}{match.group("suffix")}'

    for path in HTML_FILES:
        if path.name == "anita.html":
            continue
        text = path.read_text(encoding="utf-8")
        new_text, n = ASSET_RE.subn(repl, text)
        if n and new_text != text:
            path.write_text(new_text, encoding="utf-8")
            changed += 1
            print(f"  updated {path.name} ({n} assets)")
    return changed


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("version", nargs="?", help="Explicit version string")
    parser.add_argument("--git", action="store_true", help="Use short git SHA")
    parser.add_argument(
        "--sync",
        action="store_true",
        help="Do not bump; stamp HTML with current asset-version",
    )
    args = parser.parse_args()

    if args.sync:
        version = read_version()
        if not version:
            print("asset-version is empty; pass a version or run without --sync", file=sys.stderr)
            return 1
    elif args.git:
        version = git_short()
        write_version(version)
    elif args.version:
        version = args.version.strip()
        write_version(version)
    else:
        version = dt.datetime.now().strftime("%Y%m%d%H%M")
        write_version(version)

    print(f"asset version: {version}")
    n = stamp_html(version)
    print(f"done — {n} HTML file(s) stamped")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
