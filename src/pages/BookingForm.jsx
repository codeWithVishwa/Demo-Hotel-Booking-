import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

function Field({ label, children, hint }) {
  return (
    <label className="block">
      <div className="text-sm font-semibold">{label}</div>
      <div className="mt-2">{children}</div>
      {hint ? <div className="mt-1 text-xs text-[color:var(--muted-2)]">{hint}</div> : null}
    </label>
  )
}

export default function BookingForm() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'Dorm',
    idProof: 'Aadhaar',
    arrivalTime: '12:00',
    notes: '',
    agree: false,
  })

  const [step, setStep] = useState('details') // details | payment
  const [method, setMethod] = useState('UPI')
  const [upiId, setUpiId] = useState('')
  const [card, setCard] = useState({ number: '', name: '', exp: '', cvv: '' })
  const [status, setStatus] = useState('idle') // idle | processing | success
  const [txnId, setTxnId] = useState('')

  const amount = 499

  function randomTxn() {
    const part = Math.random().toString(16).slice(2, 10).toUpperCase()
    return `TXN-${part}`
  }

  const summary = useMemo(() => {
    const guests = Number(form.guests || 1)
    return {
      name: form.fullName.trim() || 'Guest',
      roomType: form.roomType,
      guests,
      dates:
        form.checkIn && form.checkOut
          ? `${form.checkIn} → ${form.checkOut}`
          : 'Choose dates',
    }
  }, [form])

  function update(key) {
    return (e) => {
      const value =
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
      setForm((prev) => ({ ...prev, [key]: value }))
    }
  }

  function onSubmit(e) {
    e.preventDefault()
    sessionStorage.setItem(
      'bookingDraft',
      JSON.stringify({
        ...form,
        guests: Number(form.guests || 1),
      }),
    )
    setStep('payment')
    navigate('/booking', { replace: true })
  }

  function payDemo(e) {
    e.preventDefault()
    setStatus('processing')
    setTxnId('')

    window.setTimeout(() => {
      setStatus('success')
      setTxnId(randomTxn())
    }, 900)
  }

  const isValid =
    form.fullName.trim().length >= 3 &&
    form.phone.trim().length >= 8 &&
    form.checkIn &&
    form.checkOut &&
    form.agree

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <Reveal as="section" className="lux-card-soft p-6 md:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="lux-title text-2xl font-semibold">Booking form</h1>
            <p className="mt-1 text-sm text-[color:var(--muted-2)]">
              {step === 'details'
                ? 'Fill details to get complete information and next steps.'
                : 'Complete demo payment to confirm your booking.'}
            </p>
          </div>
          <Link
            to="/rooms"
            className="text-sm font-semibold text-[color:var(--muted)] hover:text-[color:var(--text)]"
          >
            View rooms →
          </Link>
        </div>

        {step === 'details' ? (
          <form onSubmit={onSubmit} className="mt-6 grid gap-5 md:grid-cols-2">
          <Field label="Full name">
            <input
              value={form.fullName}
              onChange={update('fullName')}
              className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
              placeholder="Your name"
              required
            />
          </Field>

          <Field label="Phone" hint="WhatsApp preferred">
            <input
              value={form.phone}
              onChange={update('phone')}
              className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
              placeholder="+91..."
              required
            />
          </Field>

          <Field label="Email">
            <input
              type="email"
              value={form.email}
              onChange={update('email')}
              className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
              placeholder="name@email.com"
            />
          </Field>

          <Field label="Room type">
            <select
              value={form.roomType}
              onChange={update('roomType')}
              className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
            >
              <option>Dorm</option>
              <option>Private</option>
              <option>Family</option>
            </select>
          </Field>

          <Field label="Check-in date">
            <input
              type="date"
              value={form.checkIn}
              onChange={update('checkIn')}
              className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
              required
            />
          </Field>

          <Field label="Check-out date">
            <input
              type="date"
              value={form.checkOut}
              onChange={update('checkOut')}
              className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
              required
            />
          </Field>

          <Field label="Guests">
            <input
              type="number"
              min={1}
              max={10}
              value={form.guests}
              onChange={update('guests')}
              className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
            />
          </Field>

          <Field label="Arrival time">
            <input
              type="time"
              value={form.arrivalTime}
              onChange={update('arrivalTime')}
              className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
            />
          </Field>

          <Field label="ID proof">
            <select
              value={form.idProof}
              onChange={update('idProof')}
              className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
            >
              <option>Aadhaar</option>
              <option>PAN</option>
              <option>Driving License</option>
              <option>Passport</option>
            </select>
          </Field>

          <Field label="Special notes" hint="Late check-in? Food preferences?">
            <textarea
              value={form.notes}
              onChange={update('notes')}
              rows={4}
              className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)] md:col-span-2"
              placeholder="Optional"
            />
          </Field>

          <label className="md:col-span-2 flex items-start gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
            <input
              type="checkbox"
              checked={form.agree}
              onChange={update('agree')}
              className="mt-1 h-4 w-4"
              required
            />
            <div className="text-sm text-[color:var(--muted)]">
              I confirm these details are correct and I understand this is a demo booking.
            </div>
          </label>

          <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="submit"
              disabled={!isValid}
              className="lux-btn lux-btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue to payment
            </button>
            <Link
              to="/"
              className="lux-btn lux-btn-ghost w-full sm:w-auto"
            >
              Back to Home
            </Link>
          </div>
          </form>
        ) : (
          <form onSubmit={payDemo} className="mt-6 space-y-5">
            <div className="grid gap-3 md:grid-cols-3">
              {['UPI', 'Card', 'Netbanking'].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMethod(m)}
                  className={
                    method === m
                      ? 'rounded-2xl border border-[color:var(--border-strong)] bg-[color:var(--surface-2)] px-4 py-3 text-sm font-semibold text-[color:var(--text)]'
                      : 'rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm font-semibold text-[color:var(--muted)] hover:bg-[color:var(--surface-2)]'
                  }
                >
                  {m}
                </button>
              ))}
            </div>

            {method === 'UPI' ? (
              <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
                <div className="text-sm font-semibold">UPI details</div>
                <input
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="yourname@upi"
                  className="mt-3 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
                />
                <div className="mt-2 text-xs text-[color:var(--muted-2)]">
                  Demo only: no UPI request is sent.
                </div>
              </div>
            ) : null}

            {method === 'Card' ? (
              <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
                <div className="text-sm font-semibold">Card details</div>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <input
                    value={card.number}
                    onChange={(e) => setCard((p) => ({ ...p, number: e.target.value }))}
                    placeholder="Card number"
                    className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)] md:col-span-2"
                  />
                  <input
                    value={card.name}
                    onChange={(e) => setCard((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Name on card"
                    className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)] md:col-span-2"
                  />
                  <input
                    value={card.exp}
                    onChange={(e) => setCard((p) => ({ ...p, exp: e.target.value }))}
                    placeholder="MM/YY"
                    className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
                  />
                  <input
                    value={card.cvv}
                    onChange={(e) => setCard((p) => ({ ...p, cvv: e.target.value }))}
                    placeholder="CVV"
                    className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]"
                  />
                </div>
                <div className="mt-2 text-xs text-[color:var(--muted-2)]">
                  Demo only: do not enter real card details.
                </div>
              </div>
            ) : null}

            {method === 'Netbanking' ? (
              <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
                <div className="text-sm font-semibold">Netbanking</div>
                <select className="mt-3 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--ring)]">
                  <option>State Bank of India</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                </select>
                <div className="mt-2 text-xs text-[color:var(--muted-2)]">
                  Demo only: no bank redirect happens.
                </div>
              </div>
            ) : null}

            <button
              type="submit"
              disabled={status === 'processing'}
              className="lux-btn lux-btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'processing' ? 'Processing…' : `Pay ₹${amount} (Demo)`}
            </button>

            {status === 'success' ? (
              <div className="rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-5 animate-floaty">
                <div className="text-lg font-semibold">Booking confirmed (demo)</div>
                <div className="mt-2 text-sm text-[color:var(--muted)]">Transaction ID: {txnId}</div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link to="/" className="lux-btn lux-btn-primary">
                    Back to Home
                  </Link>
                  <Link to="/rooms" className="lux-btn lux-btn-ghost">
                    Browse rooms
                  </Link>
                </div>
              </div>
            ) : null}

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep('details')}
                className="lux-btn lux-btn-ghost"
              >
                Edit details
              </button>
            </div>
          </form>
        )}
      </Reveal>

      <Reveal as="aside" delayMs={120} className="lux-card-soft h-fit p-6 md:p-8">
        <div className="text-sm font-semibold text-[color:var(--text)]">Preview</div>
        <div className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
          <div>
            <span className="text-[color:var(--muted-2)]">Guest:</span> {summary.name}
          </div>
          <div>
            <span className="text-[color:var(--muted-2)]">Room:</span> {summary.roomType}
          </div>
          <div>
            <span className="text-[color:var(--muted-2)]">Guests:</span> {summary.guests}
          </div>
          <div>
            <span className="text-[color:var(--muted-2)]">Dates:</span> {summary.dates}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-xs text-[color:var(--muted-2)]">
          Tip: This booking page includes an integrated demo payment flow.
        </div>
      </Reveal>
    </div>
  )
}
