import { Banner, Card, CardContent, StatGrid, StatusChip } from '../../index'
import type { Status } from '../../ui/StatusDot'
import s from './Features.shared.module.css'
import { Meta } from './Meta'

const services: { name: string; meta: string[]; status: Status }[] = [
  { name: 'api', meta: ['GET /healthz', '200'], status: 'healthy' },
  { name: 'postgres', meta: ['TCP :5432', 'connected'], status: 'healthy' },
  { name: 'worker', meta: ['GET /ready', '503'], status: 'degraded' },
  { name: 'grafana', meta: ['stopped 2h ago'], status: 'stopped' },
]

export function VisibilityModule() {
  return (
    <div className={s.cols}>
      <div className={s.col}>
        <Card>
          <CardContent>
            <StatGrid stats={[{ label: 'Running', value: 5 }, { label: 'Degraded', value: 1 }, { label: 'Stopped', value: 1 }, { label: 'Deploying', value: 1 }]} />
          </CardContent>
        </Card>
        <Banner variant="warning" title="worker degraded">Health check failing since 14:32.</Banner>
      </div>
      <div className={s.col}>
        {services.map((svc) => (
          <div className={s.row} key={svc.name}>
            <div className={s.rowMain}>
              <span className={s.name}>{svc.name}</span>
              <Meta parts={svc.meta} />
            </div>
            <StatusChip status={svc.status} />
          </div>
        ))}
      </div>
    </div>
  )
}
