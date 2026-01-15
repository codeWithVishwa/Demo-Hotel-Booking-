import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'

function NavItem({ to, children, onClick, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `lux-navlink ${isActive ? 'lux-navlink--active' : ''}`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const navItems = useMemo(
    () => [
      { to: '/', label: 'Home', end: true },
      { to: '/rooms', label: 'Rooms' },
      { to: '/about', label: 'About' },
      { to: '/booking', label: 'Booking' },
    ],
    [],
  )

  return (
    <header className="lux-glass sticky top-0 z-50">
      <div className="lux-container flex items-center justify-between py-3">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="lux-brand-badge">
            HX
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-[color:var(--text)]">HIVENEX</div>
            <div className="text-xs text-[color:var(--muted-2)]">Hotel Booking</div>
          </div>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((i) => (
            <NavItem key={i.to} to={i.to} end={i.end}>
              {i.label}
            </NavItem>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lux-btn lux-btn-ghost px-3 py-2"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="lux-btn-icon" aria-hidden>
              {open ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu sheet */}
      {open ? (
        <div id="mobile-menu" className="lux-container pb-3 md:hidden">
          <div className="lux-sheet p-3">
            <div className="grid gap-1">
              {navItems.map((i) => (
                <NavItem key={i.to} to={i.to} end={i.end} onClick={() => setOpen(false)}>
                  {i.label}
                </NavItem>
              ))}
            </div>
            <div className="lux-divider my-3" />
            <div className="text-xs text-[color:var(--muted-2)]">
              Tip: Switch Light/Dark anytime.
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
