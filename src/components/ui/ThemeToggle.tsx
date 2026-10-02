import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { getTheme, setTheme } from '../../lib/theme'
import { Button } from './Button'

export function ThemeToggle() {
  const [theme, set] = useState(getTheme)
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={`Switch to ${next} theme`}
      onClick={() => { setTheme(next); set(next) }}
      icon={theme === 'dark' ? <Sun /> : <Moon />}
      style={{ padding: 8 }}
    />
  )
}
