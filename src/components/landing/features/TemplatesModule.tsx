import { DatabaseZap } from 'lucide-react'
import { CodeBlock, FeaturePanel, Input } from '../../index'
import s from './Features.shared.module.css'

export function TemplatesModule() {
  return (
    <FeaturePanel
      icon={<DatabaseZap size={20} />}
      title="Templates with safe outputs"
      description="Add Postgres, Redis or RabbitMQ from a form. Connection strings are computed, and secrets are only resolved when read."
    >
      <div className={s.mock}>
        <div className={s.grid2}>
          <Input label="Database" defaultValue="acme" readOnly />
          <Input label="Password" type="password" defaultValue="hunter2hunter2" readOnly />
        </div>
        <span className={s.label}>Stored output</span>
        <CodeBlock title="connection_string" code="postgres://acme:${{ env.POSTGRES_PASSWORD }}@postgres:5432/acme" />
      </div>
    </FeaturePanel>
  )
}
