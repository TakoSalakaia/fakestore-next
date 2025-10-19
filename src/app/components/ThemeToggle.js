'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // შემოწმება 
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = dark ? 'light' : 'dark';
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontSize: '1.3rem',
      }}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
