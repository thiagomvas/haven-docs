# Writing Haven docs

All documentation lives in `content/docs/` as Markdown (`.mdx`). You never need to touch `src/`:
drop a file in, and it shows up in the sidebar, routing, and prev/next links automatically.

## Layout

```
content/docs/
  getting-started/        ← folder = sidebar section  (URL: /docs/getting-started/...)
    _meta.json            ← optional: { "title": "Getting Started", "order": 1 }
    index.mdx             ← /docs/getting-started
    installation.mdx      ← /docs/getting-started/installation
  guides/
    deploying.mdx         ← /docs/guides/deploying
```

- Folder name → section (title from `_meta.json`, otherwise Title Cased folder name).
- File path → URL. `index.mdx` is the section's landing page.
- Images: put them in `public/docs/` and reference them as `![alt](/docs/name.png)`.

## Page template

```mdx
---
title: Installation          # required, rendered as the page <h1> (don't add your own)
description: One-line summary shown under the title.
order: 2                     # optional, sort within the section (lower first)
---

Start writing. Use `##` for sections.
```

## What you can use

Standard Markdown plus GitHub extras (tables, task lists, strikethrough), and:

- **Code blocks** with syntax highlighting and a copy button: fenced with the language, e.g. ` ```yaml `.
- **Callouts**: `<Callout type="info | success | warning | error" title="Optional">text</Callout>`
- **Badges**: `<Badge>beta</Badge>`
- Internal links: `[text](/docs/guides/deploying)`. External links open in a new tab.

Any other React component can be imported at the top of a page if needed.
