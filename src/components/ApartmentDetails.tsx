'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const rooms = [
  {
    id: 'bedroom',
    title: 'חדר השינה',
    icon: '🛏️',
    image: 'https://petelpro.com/wp-content/uploads/2020/08/15110960_10154212954177569_6635218798390888426_o.jpg',
    features: [
      'חדר שינה עם חלון לכיוון הגינה',
      'ארון מיטה ברוחב וחצי',
      'תאורה נעימה ואווירה רגועה',
    ],
  },
  {
    id: 'kitchen',
    title: 'המטבח',
    icon: '🍳',
    image: 'https://petelpro.com/wp-content/uploads/2020/01/30229751-0-20170604-132230-scaled-1.jpg',
    features: [
      'דלתות בצביעה בתנור, טריקה שקטה',
      'משטח עבודה מעץ מלא',
      'ברז יוקרתי ואיכותי, מידוף מלא',
      'ידיות יוקרתיות מניקל',
      'תאורת בר ותאורה למשטח העבודה',
      'בר + שני כסאות בר',
      'הכנה לתנור אפייה בילד אין',
    ],
  },
  {
    id: 'shower',
    title: 'המקלחת',
    icon: '🚿',
    image: 'https://petelpro.com/wp-content/uploads/elementor/thumbs/1565171677-30202231-408x722-20161122-121624-p8y2c2ppbdpqbyqa6novogok4wxxmda429uh43d8s8.jpg',
    features: [
      'ארון אמבטיה מעץ - עבודת נגר',
      'ברז מעוצב',
      'מראה ענקית ממוסגרת בעץ - עבודת נגר',
      'מקלחון עם חיפוי קרמיקה יוקרתי וברז מפנק',
      'רצפת קרמיקה בסגנון פרקט עץ',
    ],
  },
  {
    id: 'garden',
    title: 'הגינה',
    icon: '🌿',
    image: 'https://petelpro.com/wp-content/uploads/2020/01/40291721-0-WhatsApp-Image-2019-.jpeg',
    features: [
      'שביל חוויתי מלא בסיגליות ואבני מדרך טבעיות',
      'מעקה עץ עם חבלי ים - עבודת אמן',
      'דשא סינטטי, עצים ופרחים',
      'גינת תבלינים פרטית',
      'מערכת השקיה אוטומטית',
      'האזור מקסים, ירוק ושקט',
    ],
  },
]

export default function ApartmentDetails() {
  const [activeTab, setActiveTab] = useState('bedroom')
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

  const activeRoom = rooms.find((r) => r.id === activeTab)!

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="fade-in text-3xl md:text-4xl font-bold text-center mb-4 text-primary-dark">
          מה יש בדירה?
        </h2>
        <div className="fade-in w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />

        {/* Tabs */}
        <div className="fade-in flex flex-wrap justify-center gap-3 mb-10">
          {rooms.map((room) => (
            <button
              key={room.id}
              onClick={() => setActiveTab(room.id)}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all ${
                activeTab === room.id
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="ml-2">{room.icon}</span>
              {room.title}
            </button>
          ))}
        </div>

        {/* Active room content */}
        <div className="fade-in grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={activeRoom.image}
              alt={activeRoom.title}
              fill
              className="object-cover transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">{activeRoom.title}</h3>
            <ul className="space-y-3">
              {activeRoom.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
