'use client'

import { useState, useEffect, useRef } from 'react'

const faqs = [
  {
    q: 'איפה ממוקם היישוב צופים?',
    a: 'היישוב צופים ממוקם 15 דק\' מכפר סבא, ליד כוכב יאיר. 5 דק\' מכביש 6 - מחלף אייל.',
  },
  {
    q: 'מה יש ביישוב?',
    a: 'נוף מדהים ומצפה שמשקיף על כל מישור החוף עד לים. קופת חולים מכבי וכללית, סופר מחסני השוק, אולם ספורט חדיש, מגרשי טניס וכדורגל, פיצריה, מאפיית בוטיק, בית קפה, מרכז קהילתי, בתי כנסת, גינות משחקים, חוגים בשפע ובית ספר.',
  },
  {
    q: 'איזה סוג של יישוב זה?',
    a: 'צופים הוא יישוב כפרי קהילתי. ביישוב חיים כ-600 משפחות מעורבות, דתיים וחילוניים בחלוקה שווה. יישוב קטן עם נוף מדהים ואנשים טובים ושקטים.',
  },
  {
    q: 'האם יש תחבורה ציבורית?',
    a: 'יש אוטובוס שמגיע אחת לשעה ונוסע לכפר סבא. תחנת טרמפים פעילה, ובוואטסאפ היישובי כל הזמן מתאמים נסיעות משותפות. הרכבת נמצאת 15 דקות מהיישוב: תחנת כפר סבא או תחנת ראש העין.',
  },
  {
    q: 'האם היישוב בטוח?',
    a: 'מאוד! אף בית לא נפרץ במשך שנים. בכניסה ליישוב ישנה שמירה 24 שעות. רכב שמירה שמסתובב בשעות היום והלילה. המקום הכי בטוח לחיות בו באזור.',
  },
  {
    q: 'איך מתבצע התשלום ומה הוא כולל?',
    a: 'התשלום מתבצע אחת לחודש בצ\'ק או בהעברה בנקאית. ישנו מונה חשמל נפרד בדירה, ממוצע שימוש ליחיד בין 70-100 ₪ לחודש.',
  },
  {
    q: 'האם הדירה מתאימה לזוג?',
    a: 'גודל הדירה כ-40 מ"ר והיא מתאימה ליחיד/ה.',
  },
  {
    q: 'האם ניתן להשכיר לטווח קצר?',
    a: 'לצערנו לא. החוזה הוא ל-12 חודשים.',
  },
  {
    q: 'האם ניתן לעבור עם בעלי חיים?',
    a: 'בעקרון כן, כל עוד השקט והנקיון נשמר.',
  },
  {
    q: 'מה לגבי עישון?',
    a: 'לא ניתן לעשן בדירה. העישון מותר רק בגינה.',
  },
  {
    q: 'האם הדירה מרוהטת?',
    a: 'הדירה מרוהטת חלקית: בר עץ מלא + 2 כסאות בר, ספה, ארון ליחיד, מקרר, מכונת כביסה ומזגן.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="fade-in text-3xl md:text-4xl font-bold text-center mb-4 text-primary-dark">
          שאלות ותשובות
        </h2>
        <div className="fade-in w-16 h-1 bg-accent mx-auto mb-4 rounded-full" />
        <p className="fade-in text-center text-gray-500 mb-12 text-lg">
          כל מה שרציתם לשאול...
        </p>

        <div className="fade-in space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-4 text-right"
                aria-expanded={openIndex === idx}
              >
                <span className="font-semibold text-gray-800 text-lg">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 mr-4 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`accordion-content ${openIndex === idx ? 'open' : ''}`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
