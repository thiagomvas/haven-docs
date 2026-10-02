import type { ReactNode } from 'react'
import styles from './FeaturePanel.module.css'

interface Props {
  icon: ReactNode
  title: string
  description?: ReactNode
  action?: ReactNode
  children?: ReactNode
}

export function FeaturePanel({ icon, title, description, action, children }: Props) {
  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        {action}
      </header>
      {children}
    </section>
  )
}
