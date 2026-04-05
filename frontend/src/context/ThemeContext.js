import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    const stored = localStorage.getItem('themeMode');
    return stored || 'system';
  });

  const [isDark, setIsDark] = useState(() => {
    if (themeMode === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return themeMode === 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    const getEffectiveTheme = () => {
      if (themeMode === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      return themeMode === 'dark';
    };

    const effectiveDark = getEffectiveTheme();
    
    if (effectiveDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  useEffect(() => {
    if (themeMode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        setIsDark(mediaQuery.matches);
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      setIsDark(themeMode === 'dark');
    }
  }, [themeMode]);

  const setTheme = (mode) => {
    setThemeMode(mode);
  };

  const toggleTheme = () => {
    if (themeMode === 'light') {
      setThemeMode('dark');
    } else if (themeMode === 'dark') {
      setThemeMode('system');
    } else {
      setThemeMode('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, themeMode, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};