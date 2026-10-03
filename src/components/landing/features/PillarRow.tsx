import clsx from 'clsx'
import { Check } from 'lucide-react'
import type { ReactNode } from 'react'
import styles from './PillarRow.module.css'

interface Props {
  index: string
  icon: ReactNode
  title: ReactNode
  description: string
  points: ReactNode[]
  /** Text shown in the mock window's title bar. */
  windowTitle: string
  reverse?: boolean
  children: ReactNode
}

export function PillarRow({ index, icon, title, description, points, windowTitle, reverse, children }: Props) {
  return (
    <article className={clsx(styles.row, reverse && styles.reverse)}>
      <div className={styles.copy}>
        <div className={styles.kicker}>
          <span className={styles.icon}>{icon}</span>
          <span className={styles.index}>{index}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.points}>
          {points.map((p, i) => (
            <li key={i}><Check size={16} aria-hidden="true" />{p}</li>
          ))}
        </ul>
      </div>
      <div className={styles.stage}>
        <div className={styles.window} aria-hidden="true">
          <div className={styles.chrome}>
            <span className={styles.lights}><i /><i /><i /></span>
            <span className={styles.windowTitle}>{windowTitle}</span>
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </article>
  )
}
