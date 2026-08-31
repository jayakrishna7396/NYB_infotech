import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeButton() {
  // Get Context Data
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default ThemeButton;