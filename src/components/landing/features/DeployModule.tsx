import { Rocket } from 'lucide-react'
import { Button, CodeBlock, FeaturePanel, StatusChip, Tabs } from '../../index'
import s from './Features.shared.module.css'

const webhook = `curl -X POST https://haven.acme.dev/api/webhooks/deploy/<token>`

export function DeployModule() {
  return (
    <FeaturePanel
      icon={<Rocket size={20} />}
      title="Deploy from anywhere"
      description="Run an image, build a Dockerfile straight from Git, or trigger deploys from your pipeline. Every deploy is a queued job."
    >
      <Tabs
        tabs={[
          {
            id: 'image',
            label: 'Docker image',
            content: (
              <div className={s.mock}>
                <div className={s.row}>
                  <div className={s.rowMain}>
                    <span className={s.name}>ghcr.io/acme/api:2.4.1</span>
                    <span className={s.meta}>8080:8080 · restart: unless-stopped</span>
                  </div>
                  <StatusChip status="running" />
                </div>
              </div>
            ),
          },
          {
            id: 'git',
            label: 'Dockerfile from Git',
            content: (
              <div className={s.mock}>
                <div className={s.row}>
                  <div className={s.rowMain}>
                    <span className={s.name}>acme/worker</span>
                    <span className={s.meta}>ref: main · ./docker/Dockerfile</span>
                  </div>
                  <StatusChip status="deploying" />
                </div>
                <div className={s.chips}><Button size="sm" variant="secondary">Redeploy</Button><Button size="sm" variant="ghost">View logs</Button></div>
              </div>
            ),
          },
          {
            id: 'webhook',
            label: 'Webhook',
            content: <CodeBlock title="CI step" code={webhook} />,
          },
        ]}
      />
    </FeaturePanel>
  )
}
