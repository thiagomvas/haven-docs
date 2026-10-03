import { Link } from 'react-router'
import { Button, Logo, ThemeToggle } from '..'
import { GithubIcon } from '../brand/GithubIcon'
import styles from './TopBar.module.css'

const NAV_LINKS = [
  { label: 'Getting Started', href: '/docs/getting-started' },
  { label: 'Docs', href: '/docs' },
]

export function TopBar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} aria-label="Haven home">
          <Logo />
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} to={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <Button
            as="a"
            href="https://github.com/thiagomvas/haven"
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="sm"
            aria-label="Haven on GitHub"
            icon={<GithubIcon />}
            style={{ padding: 8 }}
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
