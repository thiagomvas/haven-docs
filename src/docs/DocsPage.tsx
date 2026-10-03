import { Suspense, useEffect, useRef } from 'react'
import { Link, Navigate, NavLink, useParams } from 'react-router'
import { Footer, TopBar } from '../components/landing'
import { Spinner } from '../components'
import { docPages, docSections, findDoc } from './content'
import { mdxComponents } from './mdxComponents'
import { Toc } from './Toc'
import styles from './DocsPage.module.css'

/** Renders any page under /docs/* from content/docs. */
export default function DocsPage() {
  const slug = (useParams()['*'] ?? '').replace(/\/$/, '')
  const page = findDoc(slug)
  const index = page ? docPages.indexOf(page) : -1
  const articleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    document.title = page ? `${page.title} · Haven Docs` : 'Haven Docs'
    window.scrollTo(0, 0)
  }, [page])

  if (!slug && docPages[0]) return <Navigate to={`/docs/${docPages[0].slug}`} replace />

  const prev = docPages[index - 1]
  const next = docPages[index + 1]

  return (
    <>
      <TopBar />
      <div className={styles.layout}>
        <nav className={styles.sidebar} aria-label="Documentation">
          {docSections.map((section) => (
            <div key={section.id} className={styles.section}>
              {section.id && <div className={`eyebrow ${styles.sectionTitle}`}>{section.title}</div>}
              {section.pages.map((p) => (
                <NavLink
                  key={p.slug}
                  to={`/docs/${p.slug}`}
                  end
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                >
                  {p.title}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        <main className={styles.content}>
          {page ? (
            <article ref={articleRef} className={`prose ${styles.article}`}>
              <h1>{page.title}</h1>
              {page.description && <p className={styles.lead}>{page.description}</p>}
              <Suspense fallback={<Spinner />}>
                <page.Component components={mdxComponents} />
              </Suspense>
              <div className={styles.pager}>
                {prev ? <Link to={`/docs/${prev.slug}`}>← {prev.title}</Link> : <span />}
                {next ? <Link to={`/docs/${next.slug}`}>{next.title} →</Link> : <span />}
              </div>
            </article>
          ) : (
            <article className="prose">
              <h1>Page not found</h1>
              <p>There's no docs page at <code>/docs/{slug}</code>.</p>
            </article>
          )}
        </main>

        <Toc articleRef={articleRef} pageKey={slug} />
      </div>
      <Footer />
    </>
  )
}
