import {
  SigmaIcon, BotIcon, FlaskIcon, ShieldIcon, ChartIcon, PlugIcon,
} from './Icons.jsx';

const ITEMS = [
  { Icon: SigmaIcon,  title: 'نماذج رياضية متقدمة',
    body: 'انحدار متعدد المتغيرات، سلاسل زمنية، نماذج تقلب عشوائي، وتحليل ارتباط بين الأصول لبناء رؤية كمية للسوق.' },
  { Icon: BotIcon,    title: 'بوتات تداول آلية',
    body: 'حوّل أي نموذج تحليلي إلى بوت ينفّذ الصفقات وفق قواعد محددة مسبقًا، مع حدود مخاطرة صارمة قابلة للضبط.' },
  { Icon: FlaskIcon,  title: 'اختبار خلفي دقيق',
    body: 'شغّل استراتيجيتك على عقود من البيانات التاريخية قبل المخاطرة بأي رأس مال حقيقي، مع محاكاة للعمولات والانزلاق السعري.' },
  { Icon: ShieldIcon, title: 'إدارة مخاطرة كمية',
    body: 'حجم المركز، حدود الخسارة، وتوزيع رأس المال تُحسب وفق نماذج إحصائية، لا وفق تقدير شخصي.' },
  { Icon: ChartIcon,  title: 'تقارير أداء مفصّلة',
    body: 'شارب، سورتينو، أقصى تراجع، ومعامل الاستقرار — لكل نموذج ولكل بوت على حدة، بتحديث لحظي.' },
  { Icon: PlugIcon,   title: 'تكامل عبر API',
    body: 'اربط النماذج والبوتات مباشرة بمنصة الوساطة الخاصة بك، أو استخدم بياناتنا الكمية داخل أدواتك الخاصة.' },
];

export default function Features() {
  return (
    <section id="models">
      <div className="wrap">
        <div className="section-head">
          <h2>كل أداة تحتاجها لتحليل كمي فعلي</h2>
          <p>من بناء النموذج إلى تنفيذ الصفقة، دون مغادرة المنصة.</p>
        </div>
        <div className="features-grid">
          {ITEMS.map(({ Icon, title, body }, i) => (
            <div className="feature" key={i}>
              <span className="ic"><Icon /></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
