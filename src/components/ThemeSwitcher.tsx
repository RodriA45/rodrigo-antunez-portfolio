import { useState, useEffect } from 'react';
import './ThemeSwitcher.css';

const themes = [
  { id: 'default', color: '#3b82f6', label: 'Blue' },
  { id: 'emerald', color: '#10b981', label: 'Emerald' },
  { id: 'purple', color: '#8b5cf6', label: 'Purple' },
  { id: 'orange', color: '#f97316', label: 'Orange' },
];

export function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default';
    setActiveTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeId: string) => {
    const htmlEl = document.documentElement;
    htmlEl.classList.remove('theme-emerald', 'theme-purple', 'theme-orange');
    if (themeId !== 'default') {
      htmlEl.classList.add(`theme-${themeId}`);
    }
    localStorage.setItem('portfolio-theme', themeId);
  };

  const toggleTheme = (themeId: string) => {
    setActiveTheme(themeId);
    applyTheme(themeId);
  };

  return (
    <div className="theme-switcher">
      {themes.map((theme) => (
        <button
          key={theme.id}
          className={`theme-btn ${activeTheme === theme.id ? 'active' : ''}`}
          style={{ backgroundColor: theme.color }}
          onClick={() => toggleTheme(theme.id)}
          aria-label={`Change theme to ${theme.label}`}
        />
      ))}
    </div>
  );
}
