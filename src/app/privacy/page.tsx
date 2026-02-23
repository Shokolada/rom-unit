import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | יחידת רום',
}

export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-primary-dark">מדיניות פרטיות</h1>
      <p className="text-sm text-gray-400 mb-8">עודכן לאחרונה: פברואר 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">1. כללי</h2>
          <p>
            סייהונט בע&quot;מ (להלן: &quot;החברה&quot;) מכבדת את פרטיותם של המשתמשים באתר יחידת רום (להלן: &quot;האתר&quot;). מדיניות פרטיות זו מתארת כיצד אנו אוספים, משתמשים ומגנים על מידע הנאסף באתר.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">2. מידע שאנו אוספים</h2>
          <p>
            האתר אינו דורש רישום או מסירת פרטים אישיים. עם זאת, ייתכן שייאסף מידע טכני באופן אוטומטי, לרבות:
          </p>
          <ul className="list-disc pr-6 mt-2 space-y-1">
            <li>כתובת IP</li>
            <li>סוג הדפדפן ומערכת ההפעלה</li>
            <li>דפי האתר שנצפו ומשך השהייה</li>
            <li>מקור ההפניה לאתר</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">3. שימוש במידע</h2>
          <p>המידע הנאסף משמש אותנו למטרות הבאות:</p>
          <ul className="list-disc pr-6 mt-2 space-y-1">
            <li>שיפור חוויית המשתמש באתר</li>
            <li>ניתוח סטטיסטי של תעבורת האתר</li>
            <li>תחזוקה ושיפור ביצועי האתר</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">4. שירותי צד שלישי</h2>
          <p>האתר עושה שימוש בשירותי צד שלישי, לרבות:</p>
          <ul className="list-disc pr-6 mt-2 space-y-1">
            <li><strong>Google Maps</strong> - להצגת מפה ומיקום הנכס. השימוש כפוף לתנאי השימוש ומדיניות הפרטיות של Google.</li>
            <li><strong>YouTube</strong> - להצגת סרטון וידאו. השימוש כפוף לתנאי השימוש של YouTube/Google.</li>
            <li><strong>WhatsApp</strong> - ליצירת קשר. לחיצה על כפתור WhatsApp תפתח את אפליקציית WhatsApp במכשירכם.</li>
            <li><strong>Vercel</strong> - לאחסון והפעלת האתר.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">5. עוגיות (Cookies)</h2>
          <p>
            האתר עשוי להשתמש בעוגיות לצורך תפעול תקין ושיפור חוויית הגלישה. עוגיות הן קבצי טקסט קטנים הנשמרים במכשירכם. ניתן לנהל את הגדרות העוגיות דרך הדפדפן שלכם.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">6. אבטחת מידע</h2>
          <p>
            החברה נוקטת באמצעים סבירים לאבטחת המידע הנאסף באתר. עם זאת, אין באפשרותנו להבטיח הגנה מוחלטת מפני גישה בלתי מורשית.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">7. זכויות המשתמש</h2>
          <p>
            בהתאם לחוק הגנת הפרטיות, התשמ&quot;א-1981, הינך זכאי לעיין במידע שנאסף אודותיך ולבקש את תיקונו או מחיקתו. לבקשות בנושא, ניתן ליצור קשר בטלפון: 054-9444248.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">8. שינויים במדיניות</h2>
          <p>
            החברה שומרת לעצמה את הזכות לעדכן מדיניות זו מעת לעת. שינויים מהותיים יפורסמו באתר. המשך השימוש באתר לאחר עדכון המדיניות מהווה הסכמה למדיניות המעודכנת.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">9. יצירת קשר</h2>
          <p>
            לשאלות בנוגע למדיניות פרטיות זו, ניתן ליצור קשר בטלפון: 054-9444248.
          </p>
        </section>
      </div>

      <div className="mt-12">
        <a href="/" className="text-primary hover:underline font-semibold">
          &rarr; חזרה לעמוד הראשי
        </a>
      </div>
    </main>
  )
}
