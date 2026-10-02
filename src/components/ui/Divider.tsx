import clsx from 'clsx'
import styles from './Misc.module.css'

export function Divider({ variant = 'solid' }: { variant?: 'solid' | 'dotted' | 'dashed' | 'double' }) {
  return <hr className={clsx(styles.divider, styles[variant])} />
}
