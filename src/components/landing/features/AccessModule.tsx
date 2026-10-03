import { Users } from 'lucide-react'
import { Badge, Button, CodeBlock, FeaturePanel, Input } from '../../index'
import s from './Features.shared.module.css'

export function AccessModule() {
  return (
    <FeaturePanel
      icon={<Users size={20} />}
      title="Teams and access"
      description="Real accounts with per-user permissions. Invite teammates with a link that expires in 72 hours."
    >
      <div className={s.mock}>
        {[['Ana Ribeiro', 'Administrator'], ['Leo Matos', 'Deploy · staging']].map(([n, r]) => (
          <div className={s.row} key={n}>
            <div className={s.rowMain}><span className={s.name}>{n}</span></div>
            <Badge tone={r === 'Administrator' ? 'primary' : 'default'}>{r}</Badge>
          </div>
        ))}
        <Input label="Invite by email" placeholder="teammate@acme.dev" readOnly />
        <div className={s.chips}><Button size="sm">Create invite</Button></div>
        <CodeBlock title="Live container shell" code="$ docker exec -it api sh" />
      </div>
    </FeaturePanel>
  )
}
