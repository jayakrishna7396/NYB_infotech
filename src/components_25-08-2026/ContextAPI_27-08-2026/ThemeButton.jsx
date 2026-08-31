import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeButton = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>

      <button onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default ThemeButton;