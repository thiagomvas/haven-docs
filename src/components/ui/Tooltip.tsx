import { useId } from 'react'
import type { ReactNode } from 'react'
import styles from './Tooltip.module.css'

export function Tooltip({ label, children }: { label: string; children: ReactNode }) {
  const id = useId()
  return (
    <span className={styles.wrap} aria-describedby={id}>
      {children}
      <span id={id} role="tooltip" className={styles.tip}>{label}</span>
    </span>
  )
}
