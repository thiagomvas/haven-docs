import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { HeroNetwork } from './HeroNetwork'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.copy}>
        <h1 id="hero-title" className={styles.title}>
          Everything you run, connected.
        </h1>
        <p className={styles.lead}>
          Haven manages Docker containers and Compose stacks on a single machine. Every environment gets its own
          network, and your pipeline deploys into it with a webhook.
        </p>
        <div className={styles.actions}>
          <Button as="a" href="#get-started" size="lg" icon={<ArrowRight />}>Get started</Button>
          <Button as="a" href="#features" variant="ghost" size="lg">See what it does</Button>
        </div>
      </div>
      <div className={styles.visual}>
        <HeroNetwork />
      </div>
    </section>
  )
}
