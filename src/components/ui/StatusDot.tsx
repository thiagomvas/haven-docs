import clsx from 'clsx'
import styles from './StatusDot.module.css'

export type Status =
  | 'running' | 'healthy' | 'degraded' | 'partial' | 'unhealthy'
  | 'stopped' | 'unknown' | 'deploying' | 'deployment-pending'

const labels: Record<Status, string> = {
  running: 'Running', healthy: 'Healthy', degraded: 'Degraded', partial: 'Partial', unhealthy: 'Unhealthy',
  stopped: 'Stopped', unknown: 'Unknown', deploying: 'Deploying', 'deployment-pending': 'Pending',
}

const cls = (s: Status) => styles[s === 'deployment-pending' ? 'pending' : s]

export function StatusDot({ status, className }: { status: Status; className?: string }) {
  return <span className={clsx(styles.dot, cls(status), className)} aria-hidden="true" />
}

/** Dot + label in a raised pill. Never relies on colour alone. */
export function StatusChip({ status, label }: { status: Status; label?: string }) {
  return (
    <span className={styles.chip}>
      <StatusDot status={status} />
      {label ?? labels[status]}
    </span>
  )
}
