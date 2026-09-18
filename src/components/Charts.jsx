export function HeroChart() {
  const candles = [
    [40,58,32,50],[48,64,44,60],[58,50,66,55],[54,70,48,68],[66,52,60,45],
    [58,74,50,70],[68,60,78,64],[60,80,55,76],[74,66,84,70],[64,86,58,82],
    [80,72,90,76],[70,92,64,88],[86,78,96,82],[76,98,70,94],
  ];
  const cw = 720, ch = 260, n = candles.length, gap = cw / n;
  const scaleY = v => ch - (v / 100) * ch * 0.92 - 8;
  const modelPts = candles.map((c, i) => [(i + 0.5) * gap, scaleY((c[0] + c[3]) / 2)]);
  const modelPath = modelPts
    .map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1))
    .join(' ');

  return (
    <svg viewBox={`0 0 ${cw} ${ch}`} width="100%" height="auto" role="img"
         aria-label="رسم بياني تحليلي للسوق">
      {[0.2, 0.4, 0.6, 0.8].map((f, i) => (
        <line key={i} x1="0" x2={cw} y1={ch * f} y2={ch * f}
              stroke="var(--border-soft)" strokeWidth="1" />
      ))}
      {candles.map((c, i) => {
        const [o, h, l, cl] = c;
        const x = (i + 0.5) * gap;
        const up = cl > o;                          /* ← الإصلاح */
        const bodyTop = scaleY(Math.max(o, cl));
        const bodyBot = scaleY(Math.min(o, cl));
        const color = up ? 'var(--sage)' : 'var(--rust)';
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={scaleY(h)} y2={scaleY(l)}
                  stroke={color} strokeWidth="1.2" />
            <rect x={x - 5} y={bodyTop} width="10"
                  height={Math.max(bodyBot - bodyTop, 1.5)}
                  fill={color} opacity="0.9" />
          </g>
        );
      })}
      <path d={modelPath} fill="none" stroke="var(--gold)" strokeWidth="2" opacity="0.95" />
      {modelPts.filter((_, i) => i % 3 === 0).map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="2.4" fill="var(--gold)" />
      ))}
    </svg>
  );
}

export function EquityCurve() {
  const w = 760, h = 220;
  const raw = [100,104,109,107,115,122,118,109,101,108,117,126,133,129,140,151,146,158,167,163,175,186];
  const max = Math.max(...raw), min = Math.min(...raw);
  const pts = raw.map((v, i) => {
    const x = (i / (raw.length - 1)) * w;
    const y = h - ((v - min) / (max - min)) * (h - 24) - 12;
    return [x, y];
  });
  const path = pts
    .map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1))
    .join(' ');
  const areaPath = path + ` L${w},${h} L0,${h} Z`;
  const ddStart = 6, ddEnd = 8;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="auto" role="img"
         aria-label="منحنى نمو المحفظة الافتراضية">
      <defs>
        <linearGradient id="eqfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--teal)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x={pts[ddStart][0]} y="0" width={pts[ddEnd][0] - pts[ddStart][0]}
            height={h} fill="var(--rust)" opacity="0.1" />
      <path d={areaPath} fill="url(#eqfill)" />
      <path d={path} fill="none" stroke="var(--teal)" strokeWidth="2.2" />
    </svg>
  );
}
