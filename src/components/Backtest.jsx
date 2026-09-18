import { EquityCurve } from './Charts.jsx';

const METRICS = [
  { val: '2.14',  lbl: 'معامل شارب',   cls: 'pos' },
  { val: '-8.4%', lbl: 'أقصى تراجع',   cls: 'neg' },
  { val: '63%',   lbl: 'معدل الفوز',   cls: '' },
  { val: '+86%',  lbl: 'العائد التراكمي', cls: 'pos' },
];

export default function Backtest() {
  return (
    <section className="backtest" id="backtest">
      <div className="wrap">
        <div className="section-head">
          <h2>الاختبار الخلفي: لا ثقة بلا دليل</h2>
          <p>كل نموذج على براهين يمر باختبار خلفي صارم قبل أن يُعرض عليك، وتستطيع إعادة الاختبار بشروطك الخاصة.</p>
        </div>
        <div className="backtest-panel">
          <div className="panel-caption">
            محفظة افتراضية · نموذج الانعكاس الإحصائي · 24 شهرًا
          </div>
          <EquityCurve />
          <div className="metrics-row">
            {METRICS.map((m, i) => (
              <div className="metric" key={i}>
                <div className={`val ${m.cls}`}>{m.val}</div>
                <div className="lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
          <p className="disclaimer">
            الأداء السابق لا يضمن النتائج المستقبلية. جميع الأرقام المعروضة لأغراض توضيحية على محفظة افتراضية،
            ولا تُعد نصيحة استثمارية.
          </p>
        </div>
      </div>
    </section>
  );
}
