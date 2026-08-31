import { useState } from "react";

function useTheme() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return {
    darkMode,
    toggleTheme
  };
}

export default useTheme;