import { Logo, ThemeToggle } from '..'
import styles from './TopBar.module.css'

const NAV_LINKS = [
  { label: 'Getting Started', href: '/getting-started' },
  { label: 'Docs', href: '/docs' },
]

export function TopBar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.brand} aria-label="Haven home">
          <Logo />
        </a>
        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
