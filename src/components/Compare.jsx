const BASIC = [
  'إشارة شراء أو بيع بلا شرح',
  'اعتماد على مؤشرات فنية سطحية',
  'لا اختبار تاريخي معلن',
  'أداء غير مقاس بمقاييس مخاطرة',
  'نفس الإشارة لجميع المستخدمين',
];

const BARAHIN = [
  'نموذج رياضي موثّق مع فرضياته وحدوده',
  'تحليل إحصائي: ارتداد، تقلب، ارتباط، وتوزيعات',
  'اختبار خلفي على بيانات تاريخية قابل للتدقيق',
  'مقاييس دقيقة: شارب، أقصى تراجع، معدل الفوز',
  'نماذج قابلة للتخصيص حسب أفق المخاطرة',
];

export default function Compare() {
  return (
    <section className="compare" id="compare">
      <div className="wrap section-head">
        <h2>إشارة، أم دليل رياضي؟</h2>
        <p>أغلب أدوات التداول تكتفي بإخبارك ماذا تفعل. براهين تريك لماذا، وبأي احتمال، وبأي مخاطرة.</p>
      </div>
      <div className="compare-grid">
        <div className="compare-col">
          <h3>أدوات الإشارات التقليدية</h3>
          <ul>
            {BASIC.map((t, i) => (
              <li key={i}><span className="mk">–</span>{t}</li>
            ))}
          </ul>
        </div>
        <div className="compare-col highlight">
          <h3>براهين</h3>
          <ul>
            {BARAHIN.map((t, i) => (
              <li key={i}><span className="mk">+</span>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
