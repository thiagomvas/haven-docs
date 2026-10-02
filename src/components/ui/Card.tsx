import clsx from 'clsx'
import type { HTMLAttributes } from 'react'
import styles from './Card.module.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  clickable?: boolean
}

export function Card({ clickable, className, onKeyDown, onClick, ...rest }: CardProps) {
  return (
    <div
      className={clsx(styles.card, clickable && styles.clickable, className)}
      onClick={onClick}
      onKeyDown={(e) => {
        onKeyDown?.(e)
        if (clickable && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          e.currentTarget.click()
        }
      }}
      {...(clickable && { role: 'button', tabIndex: 0 })}
      {...rest}
    />
  )
}

export const CardHeader = ({ className, ...p }: HTMLAttributes<HTMLDivElement>) => <div className={clsx(styles.header, className)} {...p} />
export const CardContent = ({ className, ...p }: HTMLAttributes<HTMLDivElement>) => <div className={clsx(styles.content, className)} {...p} />
export const CardFooter = ({ className, ...p }: HTMLAttributes<HTMLDivElement>) => <div className={clsx(styles.footer, className)} {...p} />
export const CardTitle = ({ className, ...p }: HTMLAttributes<HTMLHeadingElement>) => <h3 className={clsx(styles.title, className)} {...p} />

interface StatProps { label: string; value: string | number }
/** Label/value pairs shown at the bottom of a card. */
export function StatGrid({ stats }: { stats: StatProps[] }) {
  return (
    <div className={styles.stats}>
      {stats.map((s) => (
        <div key={s.label}>
          <div className={styles.statLabel}>{s.label}</div>
          <div className={styles.statValue}>{s.value}</div>
        </div>
      ))}
    </div>
  )
}
