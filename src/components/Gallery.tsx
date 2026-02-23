'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

const images = [
  { src: 'https://petelpro.com/wp-content/uploads/2020/04/20200428_124525.jpg', alt: 'הדירה מבחוץ' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/01/30229751-0-20170604-132230-scaled-1.jpg', alt: 'הנוף מהדירה' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/08/118326962_3456686504375417_4100241892722939164_n.jpg', alt: 'שביל כניסה' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/08/118347427_3456686387708762_7749563934132986187_n.jpg', alt: 'גדר מעץ' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/08/118423389_3456686531042081_2740130990788480578_n.jpg', alt: 'הגינה' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/08/118294506_3456686611042073_5444865824601310826_n.jpg', alt: 'פרטים מהגינה' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/08/118290602_3456686271042107_2860386849625259268_n.jpg', alt: 'גינת תבלינים' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/08/118259832_3456686414375426_2180923049948443491_n.jpg', alt: 'הכניסה לדירה' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/04/Screenshot_20200421-182635_WhatsAppBusiness.jpg', alt: 'המטבח' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/04/Screenshot_20200421-182708_WhatsAppBusiness.jpg', alt: 'פינת האוכל' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/04/Screenshot_20200421-182819_WhatsAppBusiness.jpg', alt: 'חדר השינה' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/04/EFFECTS.jpg', alt: 'המקלחת' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/08/20170601_165725-scaled.jpg', alt: 'הנוף ביישוב' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/08/20170604_132222-scaled.jpg', alt: 'שביל סיגליות' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/08/20170223_101705.jpg', alt: 'מבט על הירוק' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/01/35274151-0-IMG-20180913-WA0011.jpeg', alt: 'ירידה לחצר פרטית' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/01/42586536-0-IMG-20190429-075044.jpg', alt: 'שביל הכניסה' },
  { src: 'https://petelpro.com/wp-content/uploads/2020/01/1565171675-30202256-389x219-IMG-20180224-WA0022.jpeg', alt: 'הנוף מהמרפסת' },
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null)), [])
  const next = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null)), [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') next()
      if (e.key === 'ArrowRight') prev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, closeLightbox, prev, next])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section ref={sectionRef} className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="fade-in text-3xl md:text-4xl font-bold text-center mb-4 text-primary-dark">
            תמונות מהדירה ומבחוץ
          </h2>
          <div className="fade-in w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />

          <div className="fade-in grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                aria-label={`פתח תמונה: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 left-4 text-white/80 hover:text-white z-10"
            aria-label="סגור"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full"
            aria-label="תמונה קודמת"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full"
            aria-label="תמונה הבאה"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
