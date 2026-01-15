import { useEffect, useRef, useState } from 'react'

export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delayMs = 0,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal--in' : ''} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </Tag>
  )
}
