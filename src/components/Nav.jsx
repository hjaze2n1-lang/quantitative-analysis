import { useState } from 'react';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from './Icons.jsx';

const LINKS = [
  { href: '#models', label: 'النماذج' },
  { href: '#compare', label: 'لماذا براهين' },
  { href: '#bots', label: 'البوتات' },
  { href: '#backtest', label: 'الاختبار الخلفي' },
];

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#" className="brand" aria-label="براهين">
          <span className="mark">ب</span>
          <span>براهين</span>
        </a>

        <nav className="links" aria-label="التنقل الرئيسي">
          {LINKS.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن'}
            type="button"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <a href="#start" className="btn btn-primary nav-cta">ابدأ الآن</a>

          <button
            className="icon-btn menu-toggle"
            onClick={() => setOpen(o => !o)}
            aria-label="القائمة"
            aria-expanded={open}
            type="button"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-links" aria-label="التنقل للجوال">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#start" className="btn btn-primary" onClick={() => setOpen(false)}>ابدأ الآن</a>
        </nav>
      )}
    </header>
  );
}
