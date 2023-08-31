import React, { createContext, useContext, useState } from 'react';

interface ThemeContextType {
  isDarkTheme: boolean;
  setTheme: (_newTheme: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: any) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const setTheme = (newTheme: boolean) => {
    setIsDarkTheme(newTheme);
  };


  const themeContextValue = {
    isDarkTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
