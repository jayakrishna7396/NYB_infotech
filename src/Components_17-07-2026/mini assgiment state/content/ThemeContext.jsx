import { createContext, useContext, useState } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Create Theme Provider
export function ThemeProvider({ children }) {
  // Global Theme State
  const [theme, setTheme] = useState("light");

  // Function to change theme
  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook to use Theme Context
export function useTheme() {
  return useContext(ThemeContext);
}