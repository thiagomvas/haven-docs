import { Banner, CodeBlock, StatusChip } from '../../index'
import type { Status } from '../../ui/StatusDot'
import s from './Features.shared.module.css'
import { Meta } from './Meta'

const deployments: { id: string; source: string[]; status: Status }[] = [
  { id: '#42', source: ['webhook', 'main@3f9c2a1'], status: 'deploying' },
  { id: '#41', source: ['webhook', 'main@a81d0be'], status: 'running' },
  { id: '#40', source: ['manual', 'v2.4.0'], status: 'running' },
]

export function DeploymentsModule() {
  return (
    <div className={s.cols}>
      <div className={s.col}>
        <span className={s.label}>From your pipeline</span>
        <CodeBlock code="curl -X POST https://haven.acme.dev/api/webhooks/deploy/$TOKEN" />
        <span className={s.label}>Recent deployments</span>
        {deployments.map((d) => (
          <div className={s.row} key={d.id}>
            <div className={s.rowMain}>
              <span className={s.name}>Deployment {d.id}</span>
              <Meta parts={d.source} />
            </div>
            <StatusChip status={d.status} />
          </div>
        ))}
      </div>
      <div className={s.col}>
        <span className={s.label}>Notifications</span>
        <Banner variant="success" title="api deployed">Deployment #41 finished in 38s.</Banner>
        <Banner variant="warning" title="worker degraded">Health check failing since 14:32.</Banner>
        <Banner variant="info" title="Delivered">Discord, Ntfy, Email</Banner>
      </div>
    </div>
  )
}
