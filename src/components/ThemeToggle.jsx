import { useEffect, useState } from 'react'

function getInitialTheme() {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia?.('(prefers-color-scheme: light)')?.matches
    ? 'light'
    : 'dark'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return getInitialTheme()
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className="lux-btn lux-btn-ghost"
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      <span className="lux-btn-icon" aria-hidden>
        {theme === 'dark' ? '☾' : '☀'}
      </span>
      <span className="hidden sm:inline">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  )
}
