const STATS = [
  { n: '+15',  l: 'عامًا من البيانات التاريخية' },
  { n: '40+',  l: 'نموذجًا تحليليًا جاهزًا' },
  { n: '120K', l: 'اختبار خلفي مكتمل شهريًا' },
  { n: '24/7', l: 'مراقبة آلية للبوتات النشطة' },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap stats-grid">
        {STATS.map((s, i) => (
          <div className="stat" key={i}>
            <div className="n">{s.n}</div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
