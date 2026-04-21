'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.018!2d-60.023!3d-3.132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bc7dbf7a4ad%3A0x0!2sAv.+%C3%81lvaro+Maia%2C+1444+-+Pra%C3%A7a+14+de+Janeiro%2C+Manaus+-+AM!5e0!3m2!1spt-BR!2sbr!4v1700000000000'

export default function LazyMap() {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLoaded(true) },
      { rootMargin: '300px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden border border-sand shadow-card h-72 sm:h-80 md:h-96 bg-cream"
    >
      {loaded ? (
        <iframe
          title="Localização — Av. Álvaro Maia, 1444 — Manaus/AM"
          src={MAP_SRC}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-sand">
          <MapPin size={32} className="text-accent/40" />
          <p className="font-sans text-xs text-muted">Carregando mapa…</p>
        </div>
      )}
    </div>
  )
}
