import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import receptionImg from '../assets/reception_image.jpg'

import avatar1 from '../assets/download (1).jpeg'
import avatar2 from '../assets/download (2).jpeg'
import avatar3 from '../assets/download (3).jpeg'
import avatar4 from '../assets/download (4).jpeg'

const reviews = [
  {
    name: 'Ananya',
    rating: 5,
    text: 'Clean rooms, friendly reception, and great location. Perfect for a weekend stay.',
    avatar: avatar1,
  },
  {
    name: 'Rahul',
    rating: 5,
    text: 'Super smooth check-in. Wi‑Fi was fast and the common area was chill.',
    avatar: avatar2,
  },
  {
    name: 'Meera',
    rating: 4,
    text: 'Value for money. Hot water and tidy bathrooms. Would stay again.',
    avatar: avatar3,
  },
  {
    name: 'Vikram',
    rating: 5,
    text: 'Great service. Reception helped with local travel tips.',
    avatar: avatar4,
  },
]

const instagram = [
  { id: 'ig1', caption: 'Common area vibes' },
  { id: 'ig2', caption: 'Late-night chai' },
  { id: 'ig3', caption: 'City-center walks' },
  { id: 'ig4', caption: 'Clean bedding' },
  { id: 'ig5', caption: 'Cozy corners' },
  { id: 'ig6', caption: 'Weekend energy' },
]

const youtube = [
  {
    id: 'ysz5S6PUM-U',
    title: 'Hostel tour (demo)',
    desc: 'A quick walkthrough of the vibe and amenities.',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'How to book (demo)',
    desc: 'See the rooms → fill details → payment demo.',
  },
  {
    id: 'LXb3EKWsInQ',
    title: 'Local tips (demo)',
    desc: 'Food, transit, and nearby must-visits.',
  },
]

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? 'text-[color:var(--accent)]' : 'text-[color:var(--muted-2)]'}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero banner */}
      <section className="lux-banner">
        <img
          src={receptionImg}
          alt="Reception"
          className="h-full w-full object-cover"
          loading="lazy"
        />

        <div className="lux-banner-content p-6 sm:p-8 md:p-12">
          <div className="max-w-2xl">
            <Reveal>
              <div className="lux-kicker">Premium stay • 24/7 reception • City-center</div>
              <h1 className="lux-title mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                A <span className="lux-text-gradient">high‑quality</span> stay,
                <br />
                designed around comfort.
              </h1>
            </Reveal>

            <Reveal delayMs={90}>
              <p className="lux-subtitle mt-4">
                Discover rooms, read reviews, and book in minutes. This is a luxury-style demo
                experience with an integrated payment mock.
              </p>
            </Reveal>

            <Reveal delayMs={150}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link className="lux-btn lux-btn-primary" to="/booking">
                  Start booking
                </Link>
                <Link className="lux-btn lux-btn-ghost" to="/rooms">
                  Explore rooms
                </Link>
              </div>
            </Reveal>

            <Reveal delayMs={220}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="lux-panel p-4">
                  <div className="text-xs text-[color:var(--muted-2)]">Check-in</div>
                  <div className="mt-1 text-base font-semibold">2:00 PM</div>
                </div>
                <div className="lux-panel p-4">
                  <div className="text-xs text-[color:var(--muted-2)]">Check-out</div>
                  <div className="mt-1 text-base font-semibold">11:00 AM</div>
                </div>
                <div className="lux-panel p-4">
                  <div className="text-xs text-[color:var(--muted-2)]">Support</div>
                  <div className="mt-1 text-base font-semibold">24/7 Reception</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end sm:gap-4">
            <div>
              <div className="lux-kicker">Social proof</div>
              <h2 className="lux-title mt-1 text-xl font-semibold sm:text-2xl">Google Reviews</h2>
            </div>
            <div className="text-sm text-[color:var(--muted)]">4.7 average • 2,100+ reviews</div>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, idx) => (
            <Reveal key={r.name} delayMs={idx * 60}>
              <div className="lux-card-soft lux-card-hover p-5">
                <div className="flex items-center gap-3">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="h-11 w-11 rounded-full border border-[color:var(--border)] object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-[color:var(--text)]">{r.name}</div>
                    <div className="mt-0.5">
                      <Stars rating={r.rating} />
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-sm text-[color:var(--muted)]">“{r.text}”</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <section>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end sm:gap-4">
            <div>
              <div className="lux-kicker">Moments</div>
              <h2 className="lux-title mt-1 text-xl font-semibold sm:text-2xl">Instagram</h2>
            </div>
            <div className="text-sm text-[color:var(--muted)]">@hivenex.stays</div>
          </div>
        </Reveal>

        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {instagram.map((p, idx) => (
            <Reveal key={p.id} delayMs={idx * 45}>
              <div className="lux-card-soft lux-card-hover overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-white/10 via-white/5 to-transparent animate-shimmer" />
                <div className="p-3 text-xs text-[color:var(--muted)]">{p.caption}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* YouTube */}
      <section>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end sm:gap-4">
            <div>
              <div className="lux-kicker">Videos</div>
              <h2 className="lux-title mt-1 text-xl font-semibold sm:text-2xl">YouTube</h2>
            </div>
            <div className="text-sm text-[color:var(--muted)]">Hostel tours & tips</div>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {youtube.map((v, idx) => (
            <Reveal key={v.id} delayMs={idx * 60}>
              <div className="lux-card-soft overflow-hidden">
                <div className="aspect-video w-full overflow-hidden border-b border-[color:var(--border)]">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <div className="font-semibold text-[color:var(--text)]">{v.title}</div>
                  <div className="mt-1 text-sm text-[color:var(--muted)]">{v.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
