"""MkDocs hook: inject latest changelog entries into the landing page.

Replaces the marker <!-- RECENT_UPDATES --> in docs/index.md at build
time with HTML parsed from docs/changelog.md.

Changelog entries must look like:
    ## V1.4 19th November 2025

    Short description.

If no entries are found, the marker is removed cleanly.
"""

from __future__ import annotations

import os
import re
from datetime import datetime

ENTRY_LIMIT = 3
MONTHS = {
    "january": "Jan", "february": "Feb", "march": "Mar", "april": "Apr",
    "may": "May", "june": "Jun", "july": "Jul", "august": "Aug",
    "september": "Sep", "october": "Oct", "november": "Nov", "december": "Dec",
}

_HEADING = re.compile(
    r"^##\s+(?P<tag>V[\d.]+)\s+(?P<day>\d+)\w*\s+(?P<month>\w+)\s+(?P<year>\d+)\s*$",
    re.IGNORECASE,
)


def _parse_changelog(path: str):
    entries = []
    current = None
    try:
        with open(path, encoding="utf-8") as fh:
            lines = fh.readlines()
    except FileNotFoundError:
        return entries

    for line in lines:
        match = _HEADING.match(line.strip())
        if match:
            if current:
                entries.append(current)
            current = {
                "tag": match.group("tag"),
                "day": match.group("day"),
                "month": MONTHS.get(match.group("month").lower(), match.group("month")[:3].title()),
                "year": match.group("year"),
                "text": "",
            }
            continue
        if current is not None and line.strip():
            if current["text"]:
                current["text"] += " "
            current["text"] += line.strip()
    if current:
        entries.append(current)
    return entries[:ENTRY_LIMIT]


def _render(entries):
    if not entries:
        return ""
    parts = []
    parts.append('<section class="docs-home__updates" aria-label="Recent updates">')
    parts.append('<div class="docs-updates__head">')
    parts.append('<a class="docs-updates__link" href="changelog/">View full changelog →</a>')
    parts.append('</div>')
    parts.append('<ul class="docs-updates__list">')
    for entry in entries:
        parts.append('<li>')
        parts.append(f'<span class="docs-updates__tag">{entry["tag"]}</span>')
        parts.append(
            f'<span class="docs-updates__date">{entry["month"]} {entry["day"]}, {entry["year"]}</span>'
        )
        parts.append(f'<span class="docs-updates__text">{entry["text"]}</span>')
        parts.append('</li>')
    parts.append('</ul>')
    parts.append('</section>')
    return "\n".join(parts)


def on_page_markdown(markdown: str, page, config, files):
    if page.file.src_path not in {"index.md", "index"}:
        return markdown
    if "<!-- RECENT_UPDATES -->" not in markdown:
        return markdown
    docs_dir = config["docs_dir"]
    entries = _parse_changelog(os.path.join(docs_dir, "changelog.md"))
    return markdown.replace("<!-- RECENT_UPDATES -->", _render(entries))
