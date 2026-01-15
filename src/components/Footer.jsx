export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--nav-bg)]">
      <div className="lux-container grid gap-8 py-10 text-sm text-[color:var(--muted)] md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="lux-brand-badge">HX</div>
            <div>
              <div className="font-semibold text-[color:var(--text)]">HIVENEX</div>
              <div className="text-xs text-[color:var(--muted-2)]">Luxury booking demo</div>
            </div>
          </div>
          <div className="mt-3 text-[color:var(--muted-2)]">
            A premium-style demo for rooms, booking details, and a mock payment flow.
          </div>
        </div>

        <div>
          <div className="font-semibold text-[color:var(--text)]">Quick links</div>
          <div className="mt-3 grid gap-2 text-[color:var(--muted-2)]">
            <a className="hover:text-[color:var(--text)]" href="/">Home</a>
            <a className="hover:text-[color:var(--text)]" href="/rooms">Rooms</a>
            <a className="hover:text-[color:var(--text)]" href="/booking">Booking</a>
            <a className="hover:text-[color:var(--text)]" href="/about">About</a>
          </div>
        </div>

        <div>
          <div className="font-semibold text-[color:var(--text)]">Contact</div>
          <div className="mt-1 text-[color:var(--muted-2)]">Reception: +91 90000 00000</div>
          <div className="text-[color:var(--muted-2)]">Email: hello@hosteldemo.test</div>
        </div>
        <div>
          <div className="font-semibold text-[color:var(--text)]">Note</div>
          <div className="mt-1 text-[color:var(--muted-2)]">
            This is a demo; no real booking/payment is processed.
          </div>
        </div>
      </div>
    </footer>
  )
}
