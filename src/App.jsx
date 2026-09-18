import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Compare from './components/Compare.jsx';
import Features from './components/Features.jsx';
import Backtest from './components/Backtest.jsx';
import Process from './components/Process.jsx';
import Stats from './components/Stats.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('barahin-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('barahin-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Compare />
        <Features />
        <Backtest />
        <Process />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
