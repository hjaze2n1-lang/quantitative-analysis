const base = {
  width: 20, height: 20, viewBox: '0 0 24 24',
  fill: 'none', stroke: 'currentColor',
  strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round',
  'aria-hidden': 'true',
};

export const SunIcon = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const MoonIcon = () => (
  <svg {...base}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
);

export const MenuIcon = () => (
  <svg {...base}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);

export const CloseIcon = () => (
  <svg {...base}><path d="M6 6l12 12M18 6L6 18" /></svg>
);

/* Feature icons — larger */
const feature = { ...base, width: 28, height: 28 };

export const SigmaIcon = () => (
  <svg {...feature}><path d="M18 4H6l6 8-6 8h12" /></svg>
);

export const BotIcon = () => (
  <svg {...feature}>
    <rect x="4" y="8" width="16" height="12" rx="3" />
    <path d="M12 4v4M9 13h.01M15 13h.01M9 17h6" />
  </svg>
);

export const FlaskIcon = () => (
  <svg {...feature}>
    <path d="M9 3h6M10 3v5.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 8.5V3" />
  </svg>
);

export const ShieldIcon = () => (
  <svg {...feature}>
    <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const ChartIcon = () => (
  <svg {...feature}>
    <path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-7M20 16v-3" />
  </svg>
);

export const PlugIcon = () => (
  <svg {...feature}>
    <path d="M9 3v6M15 3v6M6 9h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6V9zM12 18v3" />
  </svg>
);
