import { HeroChart } from './Charts.jsx';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">
            <span className="dot" />
            منصة تحليل كمي للأسواق المالية
          </div>
          <h1>السوق لا يُقرأ بالحدس، <em>بل يُحسب.</em></h1>
          <p className="lead">
            براهين تبني قراراتها على نماذج رياضية وإحصائية مختبرة على بيانات تاريخية عميقة،
            لا على إشارات جاهزة أو توقعات مبنية على الشعور. كل توصية تصلك مصحوبة بالمنطق
            الكمي الذي أنتجها.
          </p>
          <div className="hero-cta">
            <a href="#start" className="btn btn-primary">جرّب النماذج مجانًا</a>
            <a href="#backtest" className="btn btn-ghost">شاهد نتائج الاختبار الخلفي</a>
          </div>
          <div className="hero-note">
            بيانات تاريخية تمتد لأكثر من 15 عامًا عبر الأسهم والعملات والمشتقات.
          </div>
        </div>
        <div className="hero-chart-box">
          <div className="hero-chart-head">
            <span className="pair">EUR/USD · نموذج انحدار متعدد المتغيرات</span>
            <span className="badge">R² 0.94</span>
          </div>
          <HeroChart />
        </div>
      </div>
    </section>
  );
}
