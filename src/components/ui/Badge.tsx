import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Badge.module.css'

export type Tone = 'default' | 'primary' | 'success' | 'warning' | 'danger'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> { tone?: Tone }
export function Badge({ tone = 'default', className, ...rest }: BadgeProps) {
  return <span className={clsx(styles.badge, styles[tone], className)} {...rest} />
}

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone
  size?: 'sm' | 'md' | 'lg'
  outlined?: boolean
  icon?: ReactNode
}
export function Chip({ tone = 'default', size = 'md', outlined, icon, className, children, ...rest }: ChipProps) {
  return (
    <span className={clsx(styles.chip, styles[tone], styles[`chip-${size}`], outlined && styles.outlined, className)} {...rest}>
      {icon}
      {children}
    </span>
  )
}
