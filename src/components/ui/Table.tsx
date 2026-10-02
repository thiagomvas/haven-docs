import clsx from 'clsx'
import type { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes } from 'react'
import styles from './Table.module.css'

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  striped?: boolean
  hoverable?: boolean
  compact?: boolean
}

/** Wrapped so wide tables scroll horizontally instead of the page. */
export function Table({ striped, hoverable, compact, className, ...rest }: Props) {
  return (
    <div className={styles.wrap}>
      <table className={clsx(styles.table, striped && styles.striped, hoverable && styles.hoverable, compact && styles.compact, className)} {...rest} />
    </div>
  )
}

export const THead = (p: HTMLAttributes<HTMLTableSectionElement>) => <thead {...p} />
export const TBody = (p: HTMLAttributes<HTMLTableSectionElement>) => <tbody {...p} />
export const TR = (p: HTMLAttributes<HTMLTableRowElement>) => <tr {...p} />
export const TH = (p: HTMLAttributes<HTMLTableCellElement>) => <th {...p} />

interface TDProps extends TdHTMLAttributes<HTMLTableCellElement> {
  variant?: 'highlight' | 'muted' | 'mono'
}
export const TD = ({ variant, className, ...p }: TDProps) => <td className={clsx(variant && styles[variant], className)} {...p} />
