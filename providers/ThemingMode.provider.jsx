import { useEffect, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";
import { ThemingModeContext } from "../context/ThemingMode.context";

export function ThemeProvider({ children }) {
    const [themingMode, setThemingMode] = usePersistedState('theming-mode', 'auto');
    // eslint-disable-next-line no-unused-vars
    const [prefersDarkMode, _] = useState(
      typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  
    useEffect(() => {
      const prefersDarkMode = window?.matchMedia('(prefers-color-scheme: dark)').matches;
      if (themingMode === 'auto') {
        setThemingMode(prefersDarkMode ? 'dark' : 'light');
      }
    }, [themingMode]);
  
    useEffect(() => {
      if (themingMode === 'dark') {
        document.documentElement.classList.add('dark'); // required `dark` class for tailwind
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [themingMode]);
  
    useEffect(() => {
      const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
      const handlePrefersDarkModeChange = (event) => {
        setThemingMode(event.matches ? 'dark' : 'light');
      };
      matchMedia.addEventListener('change', handlePrefersDarkModeChange);
      return () =>
        matchMedia.removeEventListener('change', handlePrefersDarkModeChange);
    }, []);
  
    const handleToggleDarkMode = () => {
      setThemingMode((prevColorMode) =>
        prevColorMode === 'dark' ? 'light' : 'dark'
      );
    };
  
    return (
      <ThemingModeContext.Provider value={{ themingMode, handleToggleDarkMode, prefersDarkMode }}>
        {children}
      </ThemingModeContext.Provider>
    );
  }