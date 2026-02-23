'use client'

import { useEffect, useRef } from 'react'

export default function VideoTour() {
  const sectionRef = useRef<HTMLElement>(null)

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
    <section ref={sectionRef} className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="fade-in text-3xl md:text-4xl font-bold text-center mb-4 text-primary-dark">
          סיור וידאו
        </h2>
        <div className="fade-in w-16 h-1 bg-accent mx-auto mb-4 rounded-full" />
        <p className="fade-in text-center text-gray-500 mb-10 text-lg">
          בואו להתרשם מהדירה בסיור וידאו קצר
        </p>

        <div className="fade-in relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/KaJE_xSmqvs?rel=0"
            title="סיור וידאו בדירה"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
