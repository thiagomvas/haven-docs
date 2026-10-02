import clsx from 'clsx'
import { useId, useRef, useState } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
import styles from './Tabs.module.css'

export interface TabItem { id: string; label: ReactNode; content: ReactNode }

export function Tabs({ tabs, defaultId }: { tabs: TabItem[]; defaultId?: string }) {
  const [active, setActive] = useState(defaultId ?? tabs[0]?.id)
  const uid = useId()
  const refs = useRef<Record<string, HTMLButtonElement | null>>({})

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!step) return
    e.preventDefault()
    const next = tabs[(i + step + tabs.length) % tabs.length]
    setActive(next.id)
    refs.current[next.id]?.focus()
  }

  return (
    <div>
      <div className={styles.list} role="tablist">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => { refs.current[t.id] = el }}
            role="tab"
            id={`${uid}-tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`${uid}-panel-${t.id}`}
            tabIndex={active === t.id ? 0 : -1}
            className={clsx(styles.tab, active === t.id && styles.active)}
            onClick={() => setActive(t.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t) =>
        t.id === active ? (
          <div key={t.id} role="tabpanel" id={`${uid}-panel-${t.id}`} aria-labelledby={`${uid}-tab-${t.id}`} className={styles.panel}>
            {t.content}
          </div>
        ) : null,
      )}
    </div>
  )
}
