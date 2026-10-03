import { Network } from 'lucide-react'
import { FeaturePanel } from '../../index'
import s from './Features.shared.module.css'

const envs = [
  { network: 'haven-acme-stg', services: ['api', 'postgres'] },
  { network: 'haven-acme-prod', services: ['api', 'postgres'] },
]

export function NetworkModule() {
  return (
    <FeaturePanel
      icon={<Network size={20} />}
      title="Isolated by default"
      description="Each environment gets its own Docker network. Reaching across environments takes an explicit shared network."
    >
      <div className={s.mock}>
        <div className={s.grid2}>
          {envs.map((e) => (
            <div className={s.netBox} key={e.network}>
              <span className={s.meta}>{e.network}</span>
              {e.services.map((n) => <div className={s.row} key={n}><span className={s.name}>{n}</span></div>)}
            </div>
          ))}
        </div>
        <p className={s.note}>No route between environments</p>
      </div>
    </FeaturePanel>
  )
}
