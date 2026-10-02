import clsx from 'clsx'
import styles from './Misc.module.css'

export function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  return <span role="status" aria-label="Loading" className={clsx(styles.spinner, styles[`s-${size}`])} />
}
