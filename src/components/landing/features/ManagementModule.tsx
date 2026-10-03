import { Plus } from 'lucide-react'
import { Button, SearchInput, StatusChip } from '../../index'
import type { Status } from '../../ui/StatusDot'
import s from './Features.shared.module.css'

type Svc = { name: string; image: string; status: Status }
const envs: { name: string; network: string; services: Svc[] }[] = [
  {
    name: 'acme / staging', network: 'haven-acme-stg',
    services: [
      { name: 'api', image: 'ghcr.io/acme/api:2.4.1', status: 'running' },
      { name: 'postgres', image: 'postgres:17', status: 'running' },
      { name: 'scratch-redis', image: 'redis:7', status: 'deploying' },
    ],
  },
  {
    name: 'acme / production', network: 'haven-acme-prd',
    services: [
      { name: 'api', image: 'ghcr.io/acme/api:2.3.9', status: 'running' },
      { name: 'postgres', image: 'postgres:17', status: 'running' },
    ],
  },
  {
    name: 'blog / production', network: 'haven-blog-prd',
    services: [{ name: 'ghost', image: 'ghost:5', status: 'running' }],
  },
  {
    name: 'homelab / main', network: 'haven-lab-main',
    services: [{ name: 'grafana', image: 'grafana/grafana', status: 'stopped' }],
  },
]

export function ManagementModule() {
  return (
    <>
      <div className={s.toolbar}>
        <SearchInput placeholder="Search services" readOnly />
        <Button size="sm" icon={<Plus size={14} />}>New service</Button>
      </div>
      <div className={s.cols}>
        {envs.map((e) => (
          <div className={s.group} key={e.name}>
            <div className={s.rowMain}>
              <span className={s.name}>{e.name}</span>
              <span className={s.meta}>{e.network}</span>
            </div>
            {e.services.map((svc) => (
              <div className={s.row} key={svc.name}>
                <div className={s.rowMain}>
                  <span className={s.name}>{svc.name}</span>
                  <span className={s.meta}>{svc.image}</span>
                </div>
                <StatusChip status={svc.status} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
