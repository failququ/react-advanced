import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeData {
  switchTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeData {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, switchTheme };
}
