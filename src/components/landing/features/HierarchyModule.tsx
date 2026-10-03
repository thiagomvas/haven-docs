import { Layers } from 'lucide-react'
import { FeaturePanel, StatusChip } from '../../index'
import type { Status } from '../../ui/StatusDot'
import s from './Features.shared.module.css'

const services: { name: string; image: string; status: Status }[] = [
  { name: 'api', image: 'ghcr.io/acme/api:2.4.1', status: 'running' },
  { name: 'postgres', image: 'postgres:17', status: 'running' },
  { name: 'worker', image: 'Dockerfile · main', status: 'deploying' },
]

export function HierarchyModule() {
  return (
    <FeaturePanel
      icon={<Layers size={20} />}
      title="Project → Environment → Service"
      description="Every service lives in an environment, and every environment in a project. Status, networking and lifecycle follow that shape."
    >
      <div className={s.mock}>
        <div className={s.row}>
          <div className={s.rowMain}>
            <span className={s.name}>Acme</span>
            <span className={s.meta}>project · acme</span>
          </div>
        </div>
        <div className={s.indent}>
          <div className={s.row}>
            <div className={s.rowMain}>
              <span className={s.name}>staging</span>
              <span className={s.meta}>environment · haven-acme-stg</span>
            </div>
            <StatusChip status="running" />
          </div>
          <div className={s.indent}>
            {services.map((svc) => (
              <div className={s.row} key={svc.name}>
                <div className={s.rowMain}>
                  <span className={s.name}>{svc.name}</span>
                  <span className={s.meta}>{svc.image}</span>
                </div>
                <StatusChip status={svc.status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </FeaturePanel>
  )
}
