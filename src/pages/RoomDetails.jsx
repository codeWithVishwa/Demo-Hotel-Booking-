import { Link, useParams } from 'react-router-dom'
import { getRoomById } from '../data/rooms.js'
import Reveal from '../components/Reveal.jsx'

export default function RoomDetails() {
  const { roomId } = useParams()
  const room = getRoomById(roomId)

  if (!room) {
    return (
      <div className="lux-card-soft p-8">
        <div className="text-xl font-bold">Room not found</div>
        <p className="mt-2 text-sm text-[color:var(--muted-2)]">
          The room you are looking for does not exist in this demo.
        </p>
        <div className="mt-6">
          <Link
            to="/rooms"
            className="lux-btn lux-btn-primary"
          >
            Back to Rooms
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Reveal as="div" className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <Link
            to="/rooms"
            className="text-sm font-semibold text-[color:var(--muted)] hover:text-[color:var(--text)]"
          >
            ← Rooms
          </Link>
          <h1 className="lux-title mt-2 text-2xl font-semibold">{room.name}</h1>
          <div className="mt-1 text-sm text-[color:var(--muted-2)]">
            Type: {room.type} • Capacity: {room.capacity}
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-extrabold sm:text-4xl">₹{room.pricePerNight}</div>
          <div className="text-sm text-[color:var(--muted-2)]">per night</div>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal className="lux-card-soft overflow-hidden">
          <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2">
            {room.images.map((src, idx) => (
              <div
                key={src}
                className="group aspect-[4/3] overflow-hidden rounded-2xl"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <img
                  src={src}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="lux-card-soft space-y-4 p-6 md:p-8">
          <div>
            <div className="text-lg font-semibold">About this room</div>
            <p className="mt-2 text-sm text-[color:var(--muted)]">{room.description}</p>
          </div>

          <div>
            <div className="text-lg font-semibold">Amenities</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {room.amenities.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-1 text-xs text-[color:var(--muted)]"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold">Policies</div>
            <ul className="mt-2 space-y-1 text-sm text-[color:var(--muted)]">
              {room.policies.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/booking"
              className="lux-btn lux-btn-primary"
            >
              Continue with form
            </Link>
            <Link
              to="/booking"
              className="lux-btn lux-btn-ghost"
            >
              Book now
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
