import clsx from 'clsx'
import { AlertCircle, AlertTriangle, CheckCircle, Info } from 'lucide-react'
import type { ReactNode } from 'react'
import styles from './Banner.module.css'

export type BannerVariant = 'error' | 'success' | 'warning' | 'info'
const icons = { error: AlertCircle, success: CheckCircle, warning: AlertTriangle, info: Info }

interface Props {
  variant?: BannerVariant
  title?: string
  children?: ReactNode
  className?: string
}

export function Banner({ variant = 'info', title, children, className }: Props) {
  const Icon = icons[variant]
  return (
    <div className={clsx(styles.banner, styles[variant], className)} role={variant === 'error' ? 'alert' : 'note'}>
      <Icon size={18} className={styles.icon} aria-hidden="true" />
      <div className={styles.body}>
        {title && <div className={styles.title}>{title}</div>}
        {children && <div className={styles.description}>{children}</div>}
      </div>
    </div>
  )
}
