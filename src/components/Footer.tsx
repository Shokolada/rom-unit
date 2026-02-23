'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white/60 text-center py-6 px-4 text-sm">
      <div className="flex justify-center gap-4 mb-3">
        <a href="/terms" className="hover:text-white transition-colors underline">
          תנאי שימוש
        </a>
        <span>|</span>
        <a href="/privacy" className="hover:text-white transition-colors underline">
          מדיניות פרטיות
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} סייהונט בע&quot;מ. כל הזכויות שמורות.</p>
    </footer>
  )
}
