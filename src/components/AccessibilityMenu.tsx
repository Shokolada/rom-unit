'use client'

import { useState, useEffect } from 'react'

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false)
  const [fontSize, setFontSize] = useState(0)
  const [highContrast, setHighContrast] = useState(false)
  const [grayscale, setGrayscale] = useState(false)
  const [highlightLinks, setHighlightLinks] = useState(false)

  useEffect(() => {
    document.documentElement.style.fontSize = `${16 + fontSize * 2}px`
  }, [fontSize])

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast)
  }, [highContrast])

  useEffect(() => {
    document.documentElement.classList.toggle('grayscale-mode', grayscale)
  }, [grayscale])

  useEffect(() => {
    document.documentElement.classList.toggle('highlight-links', highlightLinks)
  }, [highlightLinks])

  const reset = () => {
    setFontSize(0)
    setHighContrast(false)
    setGrayscale(false)
    setHighlightLinks(false)
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 bg-blue-700 hover:bg-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors"
        aria-label="תפריט נגישות"
        title="נגישות"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed top-0 left-0 z-50 w-80 h-full bg-white shadow-2xl overflow-y-auto text-gray-800" dir="rtl">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">הגדרות נגישות</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="סגור תפריט נגישות"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {/* Font size */}
              <div>
                <p className="font-semibold mb-2">גודל גופן</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFontSize(Math.max(-3, fontSize - 1))}
                    className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-lg font-bold"
                  >
                    א-
                  </button>
                  <button
                    onClick={() => setFontSize(0)}
                    className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    רגיל
                  </button>
                  <button
                    onClick={() => setFontSize(Math.min(5, fontSize + 1))}
                    className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-lg font-bold"
                  >
                    א+
                  </button>
                </div>
              </div>

              {/* High contrast */}
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`w-full text-right px-4 py-3 rounded-lg border transition-colors ${
                  highContrast ? 'bg-blue-700 text-white border-blue-700' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                }`}
              >
                ניגודיות גבוהה
              </button>

              {/* Grayscale */}
              <button
                onClick={() => setGrayscale(!grayscale)}
                className={`w-full text-right px-4 py-3 rounded-lg border transition-colors ${
                  grayscale ? 'bg-blue-700 text-white border-blue-700' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                }`}
              >
                גווני אפור
              </button>

              {/* Highlight links */}
              <button
                onClick={() => setHighlightLinks(!highlightLinks)}
                className={`w-full text-right px-4 py-3 rounded-lg border transition-colors ${
                  highlightLinks ? 'bg-blue-700 text-white border-blue-700' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                }`}
              >
                הדגשת קישורים
              </button>

              {/* Reset */}
              <button
                onClick={reset}
                className="w-full px-4 py-3 bg-red-50 text-red-600 rounded-lg border border-red-200 hover:bg-red-100 transition-colors font-semibold"
              >
                איפוס הגדרות
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
