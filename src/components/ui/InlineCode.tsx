import clsx from 'clsx'
import type { HTMLAttributes } from 'react'
import styles from './CodeBlock.module.css'

/** Identifier-style code span (ports, paths, ids). Plain `<code>` already gets the global style. */
export function InlineCode({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  return <code className={clsx(styles.inline, className)} {...rest} />
}
