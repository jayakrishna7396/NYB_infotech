import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Context API Example</h1>

      <p>Current Theme: {theme}</p>
    </header>
  );
}

export default Header;