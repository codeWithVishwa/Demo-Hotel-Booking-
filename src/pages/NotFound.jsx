import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="lux-card-soft p-8">
      <div className="lux-title text-2xl font-semibold">404</div>
      <div className="mt-1 text-[color:var(--muted-2)]">Page not found.</div>
      <div className="mt-6">
        <Link
          to="/"
          className="lux-btn lux-btn-primary"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
