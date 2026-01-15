import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

function ScrollToTopOnRouteChange() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

export default function Layout() {
  return (
    <div className="lux-shell relative flex min-h-screen min-h-dvh flex-col overflow-x-clip">
      {/* Ambient animated blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-28 -top-28 h-[360px] w-[360px] rounded-full blur-3xl animate-blob bg-[color:var(--blob-1)]" />
        <div className="absolute right-[-160px] top-6 h-[440px] w-[440px] rounded-full blur-3xl animate-blob-slow bg-[color:var(--blob-2)]" />
        <div className="absolute left-1/3 bottom-[-180px] h-[440px] w-[440px] rounded-full blur-3xl animate-blob bg-[color:var(--blob-3)]" />
      </div>

      <Navbar />
      <main className="lux-container flex-1 py-8 md:py-10">
        <div className="transition-opacity duration-300">
          <Outlet />
        </div>
      </main>
      <div className="mt-auto">
      </div>
      <ScrollToTopOnRouteChange />
    </div>
  )
}
