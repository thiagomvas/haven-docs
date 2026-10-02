import clsx from 'clsx'
import styles from './Logo.module.css'

interface MarkProps {
  size?: number
  className?: string
}

/** Hexagon mark. Uses currentColor for the hex and --color-bg for the glyph, so it flips with the theme. */
export function LogoMark({ size = 28, className }: MarkProps) {
  return (
    <svg
      className={clsx(styles.mark, className)}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <path fill="currentColor" d="m50 0 43.3 25v50L50 100 6.7 75V25z" />
      <g fill="none" stroke="var(--color-bg)" strokeWidth="2" strokeLinecap="round">
        <path d="M30 33v12.5m0 9v13M70 33v12.5m0 9v13M34.5 50H43m14 0h8.5" />
        {[28, 50, 72].flatMap((y) => [30, 70].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" />))}
      </g>
      <circle cx="50" cy="50" r="7" fill="var(--color-bg)" />
    </svg>
  )
}

export function Logo({ size = 28, className }: MarkProps) {
  return (
    <span className={clsx(styles.logo, className)}>
      <LogoMark size={size} />
      <span className={styles.wordmark}>Haven</span>
    </span>
  )
}
