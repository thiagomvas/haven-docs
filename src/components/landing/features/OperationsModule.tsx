import { Activity, Bell, Flag } from 'lucide-react'
import { Badge, Chip, FeaturePanel, StatusChip } from '../../index'
import s from './Features.shared.module.css'

const checks = [
  { name: 'GET /healthz', meta: 'every 30s · 200 OK', status: 'healthy' as const },
  { name: 'TCP :5432', meta: 'every 10s · connected', status: 'healthy' as const },
  { name: 'GET /ready', meta: 'every 30s · 503', status: 'unhealthy' as const },
]

export function OperationsModule() {
  return (
    <FeaturePanel
      icon={<Activity size={20} />}
      title="Health, flags, notifications"
      description="Docker events drive status in near real time. Get told when a service degrades and again when it recovers."
    >
      <div className={s.mock}>
        {checks.map((c) => (
          <div className={s.row} key={c.name}>
            <div className={s.rowMain}>
              <span className={s.name}>{c.name}</span>
              <span className={s.meta}>{c.meta}</span>
            </div>
            <StatusChip status={c.status} />
          </div>
        ))}
        <div className={s.chips}>
          <Flag size={14} aria-hidden="true" /><Badge tone="success">new-checkout: on</Badge><Badge>beta-banner: off</Badge>
        </div>
        <div className={s.chips}>
          <Bell size={14} aria-hidden="true" />
          {['Discord', 'Ntfy', 'SMTP', 'Webhook'].map((c) => <Chip key={c} size="sm">{c}</Chip>)}
        </div>
      </div>
    </FeaturePanel>
  )
}
