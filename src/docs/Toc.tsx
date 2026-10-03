import { useEffect, useState } from 'react'
import type { RefObject } from 'react'
import styles from './Toc.module.css'

interface Heading {
  id: string
  text: string
  level: number
}

/** "On this page" list built from the rendered h2/h3 headings (ids come from rehype-slug). */
export function Toc({ articleRef, pageKey }: { articleRef: RefObject<HTMLElement | null>; pageKey: string }) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [active, setActive] = useState('')

  useEffect(() => {
    const els = [...(articleRef.current?.querySelectorAll<HTMLElement>('h2[id], h3[id]') ?? [])]
    setHeadings(els.map((el) => ({ id: el.id, text: el.textContent ?? '', level: Number(el.tagName[1]) })))
    setActive(els[0]?.id ?? '')

    // A heading becomes active once it crosses the top ~25% of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-72px 0px -75% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [articleRef, pageKey])

  if (headings.length < 2) return null

  return (
    <nav className={styles.toc} aria-label="On this page">
      <div className="eyebrow">On this page</div>
      {headings.map((h) => (
        <a
          key={h.id}
          href={`#${h.id}`}
          className={`${styles.link} ${h.level === 3 ? styles.nested : ''} ${active === h.id ? styles.active : ''}`}
          onClick={(e) => {
            e.preventDefault()
            document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' })
            history.replaceState(null, '', `#${h.id}`)
            setActive(h.id)
          }}
        >
          {h.text}
        </a>
      ))}
    </nav>
  )
}
