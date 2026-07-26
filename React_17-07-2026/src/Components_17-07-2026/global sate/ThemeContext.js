// Global State in React
// Definition
// Global State is the data that is shared between multiple components. 
// Instead of each component having its own copy of the data, the state is stored in one place and accessed by all components that need it.
// Why is this Global State?
// theme is created only once in ThemeContext.js.
// Both Header and Home can access the same theme.
// When Home changes the theme, Header updates automatically.
// The state is shared across multiple components.


import { createContext, useState } from "react";

// Create Context
export const ThemeContext = createContext();

function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("Light");

  const changeTheme = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;