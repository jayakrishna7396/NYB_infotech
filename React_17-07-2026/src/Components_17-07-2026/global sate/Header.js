import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {

  const { theme } = useContext(ThemeContext);

  return (
    <h2>Current Theme: {theme}</h2>
  );
}

export default Header;