const STEPS = [
  { n: '01', t: 'اختر نموذجك التحليلي',
    d: 'ابدأ من مكتبة النماذج الجاهزة أو ابنِ نموذجك الخاص بالمتغيرات التي تثق بها.' },
  { n: '02', t: 'اختبره على البيانات التاريخية',
    d: 'شغّل الاختبار الخلفي، راجع مقاييس الأداء والمخاطرة، وعدّل الفرضيات قبل أي التزام حقيقي.' },
  { n: '03', t: 'شغّل البوت أو تابع التوصية',
    d: 'فعّل التنفيذ الآلي بحدود مخاطرة محددة، أو استقبل التوصيات يدويًا مع كامل التبرير الكمي.' },
];

export default function Process() {
  return (
    <section id="bots">
      <div className="wrap">
        <div className="section-head">
          <h2>من النموذج إلى التنفيذ في ثلاث خطوات</h2>
        </div>
        <div className="process-list">
          {STEPS.map((s, i) => (
            <div className="step" key={i}>
              <div className="num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
