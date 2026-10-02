import clsx from 'clsx'
import type { ReactNode } from 'react'
import { CopyButton } from './CopyButton'
import styles from './CodeBlock.module.css'

interface Props {
  code: string
  /** Filename or language shown in the optional header. */
  title?: string
  /** Pre-highlighted content (e.g. Shiki output); falls back to plain code. */
  children?: ReactNode
  className?: string
}

export function CodeBlock({ code, title, children, className }: Props) {
  return (
    <div className={clsx(styles.codeBlock, className)}>
      {title ? (
        <div className={styles.header}>
          <span className={styles.headerText}>{title}</span>
          <CopyButton text={code} />
        </div>
      ) : (
        <CopyButton text={code} className={styles.floating} />
      )}
      <pre className={styles.pre} tabIndex={0}>
        <code className={styles.code}>{children ?? code}</code>
      </pre>
    </div>
  )
}
