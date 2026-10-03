import { Activity, ArrowRight, GitBranch, Layers, Rocket } from 'lucide-react'
import { Fragment } from 'react'
import {
  DeploymentsModule, ManagementModule, PillarRow, ReproducibleModule, VisibilityModule,
} from './features'
import styles from './Features.module.css'

function Flow({ steps }: { steps: string[] }) {
  return (
    <span className={styles.flow}>
      {steps.map((step, i) => (
        <Fragment key={step}>
          {i > 0 && <ArrowRight size={14} aria-label="to" />}
          {step}
        </Fragment>
      ))}
    </span>
  )
}

export function Features() {
  return (
    <section id="features" className={styles.section} aria-labelledby="features-title">
      <header className={styles.intro}>
        <span className="eyebrow">Features</span>
        <h2 id="features-title" className={styles.title}>Four things, made easy</h2>
        <p className={styles.lead}>
          Haven doesn't replace Docker, Compose or Kubernetes. It builds on top of them.
        </p>
      </header>
      <div className={styles.rows}>
        <PillarRow
          index="01" icon={<GitBranch size={20} />} title="Reproducible infrastructure"
          description="Your entire setup lives in version-controlled files, so you can rebuild, share or migrate it at any time without starting from scratch."
          points={['Platform state mirrored to YAML manifests', 'Restore from disk or a Git repository', 'Dry-run diffs before anything changes', 'Secrets sealed, never in plaintext']}
          windowTitle="haven.acme.dev / backups"
        >
          <ReproducibleModule />
        </PillarRow>
        <PillarRow
          reverse
          index="02" icon={<Rocket size={20} />} title="Integrated deployments"
          description="Haven sits inside your CI/CD pipeline, with webhooks, alerts, notifications and an API for your tooling."
          points={['Token-authenticated deploy webhooks', 'Queued deploys, one at a time per service', 'Discord, Ntfy, email and webhook alerts', 'A documented REST API']}
          windowTitle="haven.acme.dev / acme / api / deployments"
        >
          <DeploymentsModule />
        </PillarRow>
        <PillarRow
          index="03" icon={<Layers size={20} />} title="Unified service management"
          description="Every project and environment in one place. Spin up a service to experiment, then tear it down just as fast."
          points={[<Flow key="flow" steps={['Project', 'Environment', 'Service']} />,'An isolated network per environment', 'Docker images, Dockerfiles from Git, or templates', 'Databases and brokers from a form']}
          windowTitle="haven.acme.dev / services"
        >
          <ManagementModule />
        </PillarRow>
        <PillarRow
          reverse
          index="04" icon={<Activity size={20} />} title="Visibility over everything"
          description="Know what's healthy, what changed and what broke, across everything running on your machine."
          points={['Health checks rolled up per service', 'Status driven by Docker events', 'Alerts when a service degrades or recovers', 'A live shell into any container']}
          windowTitle="haven.acme.dev / overview"
        >
          <VisibilityModule />
        </PillarRow>
      </div>
    </section>
  )
}
