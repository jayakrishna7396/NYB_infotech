import { useTheme } from "../context/ThemeContext";

function ThemeButton() {
  // Consume Theme Context
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="card">
      <h2>Theme Switching</h2>

      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default ThemeButton;