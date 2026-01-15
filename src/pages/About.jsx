import Reveal from '../components/Reveal.jsx'
import receptionImg from '../assets/reception_image.jpg'

export default function About() {
  return (
    <div className="space-y-10">
      <Reveal as="section" className="lux-card-soft grid gap-8 p-6 md:grid-cols-2 md:p-10">
        <div>
          <div className="lux-pill">About • Luxury demo</div>
          <h1 className="lux-title mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            A warm welcome, every time
          </h1>
          <p className="mt-4 text-[color:var(--muted)]">
            This is a demo hostel/hotel-style booking website built with React + Vite.
            It showcases a luxury UI, rooms browsing, and an integrated booking + payment demo.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="lux-card-soft p-5">
              <div className="text-lg font-semibold">24×7 Reception</div>
              <div className="mt-1 text-sm text-[color:var(--muted)]">
                Fast check-in and local help.
              </div>
            </div>
            <div className="lux-card-soft p-5">
              <div className="text-lg font-semibold">Premium Comfort</div>
              <div className="mt-1 text-sm text-[color:var(--muted)]">
                Clean spaces, calm vibe.
              </div>
            </div>
            <div className="lux-card-soft p-5">
              <div className="text-lg font-semibold">Central Location</div>
              <div className="mt-1 text-sm text-[color:var(--muted)]">
                Easy access to city hotspots.
              </div>
            </div>
            <div className="lux-card-soft p-5">
              <div className="text-lg font-semibold">Secure Stay</div>
              <div className="mt-1 text-sm text-[color:var(--muted)]">
                ID verification and safe common areas.
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)]">
          <img
            src={receptionImg}
            alt="Reception"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </Reveal>

      <Reveal as="section" delayMs={120} className="lux-card-soft p-6 md:p-10">
        <h2 className="lux-title text-2xl font-semibold">What’s included</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              t: 'Home page',
              d: 'Banner, details, Google reviews with avatars, Instagram grid, YouTube grid.',
            },
            {
              t: 'Rooms',
              d: 'Rooms grid and a dedicated room details page for each room.',
            },
            {
              t: 'Booking + Payment',
              d: 'Single booking page with an integrated demo payment flow.',
            },
          ].map((x) => (
            <div key={x.t} className="lux-card-soft lux-card-hover p-6">
              <div className="text-lg font-semibold">{x.t}</div>
              <div className="mt-2 text-sm text-[color:var(--muted)]">{x.d}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
