import { Link } from 'react-router-dom'
import { rooms } from '../data/rooms.js'
import Reveal from '../components/Reveal.jsx'

export default function Rooms() {
  return (
    <div className="space-y-8">
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="lux-kicker">Choose your stay</div>
            <h1 className="lux-title mt-1 text-2xl font-semibold sm:text-3xl">Rooms</h1>
            <p className="mt-2 max-w-prose text-[color:var(--muted)]">
              Browse all rooms and tap a card to view details.
            </p>
          </div>
          <Link to="/booking" className="lux-btn lux-btn-primary w-full sm:w-auto">
            Booking form
          </Link>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room, idx) => (
          <Reveal key={room.id} delayMs={idx * 70}>
            <div className="lux-card-soft lux-card-hover group overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden border-b border-[color:var(--border)]">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs text-[color:var(--muted-2)]">{room.type}</div>
                    <div className="mt-1 text-lg font-semibold text-[color:var(--text)]">{room.name}</div>
                    <div className="mt-1 text-xs text-[color:var(--muted-2)]">
                      Sleeps {room.capacity}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-[color:var(--text)]">₹{room.pricePerNight}</div>
                    <div className="text-xs text-[color:var(--muted-2)]">per night</div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {room.amenities.slice(0, 4).map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-1 text-xs text-[color:var(--muted)]"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link to={`/rooms/${room.id}`} className="lux-btn lux-btn-ghost w-full sm:flex-1">
                    View details
                  </Link>
                  <Link to="/booking" className="lux-btn lux-btn-primary w-full sm:flex-1">
                    Book now
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
