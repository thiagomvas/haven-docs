import clsx from 'clsx'
import type { ButtonHTMLAttributes, ElementType, ReactNode } from 'react'
import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'success' | 'warning' | 'outline' | 'text'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  icon?: ReactNode
  /** Render as another element, e.g. "a" for link buttons. */
  as?: ElementType
  href?: string
  target?: string
  rel?: string
}

export function Button({
  variant = 'primary', size = 'md', loading, icon, as, className, children, disabled, ...rest
}: Props) {
  const Tag = as ?? 'button'
  return (
    <Tag
      className={clsx(styles.button, styles[variant], styles[size], className)}
      disabled={Tag === 'button' ? disabled || loading : undefined}
      {...(Tag === 'button' && { type: rest.type ?? 'button' })}
      {...rest}
    >
      {loading ? <span className={styles.spinner} aria-label="Loading" /> : icon}
      {children}
    </Tag>
  )
}
