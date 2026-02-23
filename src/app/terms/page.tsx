import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'תנאי שימוש | יחידת רום',
}

export default function Terms() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-primary-dark">תנאי שימוש</h1>
      <p className="text-sm text-gray-400 mb-8">עודכן לאחרונה: פברואר 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">1. כללי</h2>
          <p>
            ברוכים הבאים לאתר יחידת רום (להלן: &quot;האתר&quot;). האתר מופעל על ידי סייהונט בע&quot;מ (להלן: &quot;החברה&quot;). השימוש באתר זה מהווה הסכמה לתנאי שימוש אלה. אם אינך מסכים לתנאים, אנא הימנע משימוש באתר.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">2. תיאור השירות</h2>
          <p>
            האתר משמש להצגת מידע אודות דירת גן להשכרה ביישוב צופים. המידע באתר מוצג למטרות מידע בלבד ואינו מהווה הצעה מחייבת. פרטי הנכס, המחירים והתנאים עשויים להשתנות ללא הודעה מוקדמת.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">3. קניין רוחני</h2>
          <p>
            כל התכנים באתר, לרבות טקסטים, תמונות, עיצוב גרפי, סימני מסחר וכל חומר אחר, הם רכושה הבלעדי של החברה או של צדדים שלישיים שהעניקו לחברה רישיון שימוש. אין להעתיק, להפיץ, לשכפל או לעשות שימוש מסחרי בתכנים ללא אישור בכתב מראש.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">4. הגבלת אחריות</h2>
          <p>
            החברה עושה מאמץ לוודא שהמידע באתר מדויק ועדכני, אך אינה מתחייבת לדיוק המלא של המידע. החברה לא תישא באחריות לכל נזק ישיר או עקיף שייגרם כתוצאה מהשימוש באתר או מההסתמכות על המידע המוצג בו.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">5. קישורים לאתרים חיצוניים</h2>
          <p>
            האתר עשוי לכלול קישורים לאתרים חיצוניים (כגון Google Maps, WhatsApp, Waze). החברה אינה אחראית לתוכן, למדיניות הפרטיות או לפעולתם של אתרים אלה.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">6. שינויים בתנאי השימוש</h2>
          <p>
            החברה שומרת לעצמה את הזכות לעדכן תנאים אלה מעת לעת. המשך השימוש באתר לאחר עדכון התנאים מהווה הסכמה לתנאים המעודכנים.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">7. דין חל וסמכות שיפוט</h2>
          <p>
            תנאי שימוש אלה כפופים לדיני מדינת ישראל. סמכות השיפוט הבלעדית בכל סכסוך הנוגע לשימוש באתר תהיה לבתי המשפט המוסמכים במחוז מרכז.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">8. יצירת קשר</h2>
          <p>
            לשאלות בנוגע לתנאי שימוש אלה, ניתן ליצור קשר בטלפון: 054-9444248.
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
