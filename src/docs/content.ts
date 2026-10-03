import type { ComponentType } from 'react'

/** Frontmatter fields an .mdx page may set. */
export interface DocMeta {
  title: string
  description?: string
  /** Sort position within its section (lower first). Defaults to alphabetical. */
  order?: number
}

/** Optional `_meta.json` next to a section's pages. */
interface SectionMeta {
  title?: string
  order?: number
}

type MdxComponent = ComponentType<{ components?: Record<string, unknown> }>

export interface DocPage extends DocMeta {
  /** URL path after /docs/, e.g. `getting-started/installation`. */
  slug: string
  Component: MdxComponent
}

export interface DocSection {
  id: string
  title: string
  pages: DocPage[]
}

const ROOT = '/content/docs/'

// All pages are bundled with the (lazy-loaded) docs route, so the landing page stays small.
const modules = import.meta.glob<{ default: MdxComponent; frontmatter: DocMeta }>('/content/docs/**/*.mdx', { eager: true })
const sectionMeta = import.meta.glob<SectionMeta>('/content/docs/*/_meta.json', { import: 'default', eager: true })

const titleCase = (s: string) => s.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
const byOrder = (a: { order?: number; title: string }, b: { order?: number; title: string }) =>
  (a.order ?? 1000) - (b.order ?? 1000) || a.title.localeCompare(b.title)

function build() {
  const sections = new Map<string, DocSection & { order?: number }>()

  for (const [path, mod] of Object.entries(modules)) {
    const rel = path.slice(ROOT.length, -'.mdx'.length) // "getting-started/index"
    const parts = rel.split('/')
    const sectionId = parts.length > 1 ? parts[0] : ''
    const slug = rel.replace(/(^|\/)index$/, '')

    if (!sections.has(sectionId)) {
      const sm = sectionMeta[`${ROOT}${sectionId}/_meta.json`]
      sections.set(sectionId, {
        id: sectionId,
        title: sm?.title ?? titleCase(sectionId),
        order: sm?.order,
        pages: [],
      })
    }
    sections.get(sectionId)!.pages.push({ ...mod.frontmatter, slug, Component: mod.default })
  }

  const ordered = [...sections.values()].sort(byOrder)
  for (const s of ordered) s.pages.sort(byOrder)
  return ordered
}

export const docSections: DocSection[] = build()
export const docPages: DocPage[] = docSections.flatMap((s) => s.pages)
export const findDoc = (slug: string) => docPages.find((p) => p.slug === slug)
