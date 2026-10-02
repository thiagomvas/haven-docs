import clsx from 'clsx'
import { Search } from 'lucide-react'
import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, className, id, ...rest }: Props) {
  const auto = useId()
  const inputId = id ?? auto
  return (
    <div className={styles.field}>
      {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
      <input
        id={inputId}
        className={clsx(styles.input, error && styles.inputError, className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...rest}
      />
      {error && <span id={`${inputId}-error`} className={styles.error}>{error}</span>}
    </div>
  )
}

export function SearchInput({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={clsx(styles.search, className)}>
      <Search size={16} className={styles.searchIcon} aria-hidden="true" />
      <input type="search" className={clsx(styles.input, styles.searchInput)} {...rest} />
    </div>
  )
}
