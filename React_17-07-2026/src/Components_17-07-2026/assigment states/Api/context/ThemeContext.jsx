import { createContext, useContext, useState } from "react";

// Create Context
const ThemeContext = createContext();

// Create Provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook to consume Context
export function useTheme() {
  return useContext(ThemeContext);
}