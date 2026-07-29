import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header4() {

  const { theme } = useContext(ThemeContext);

  return (
    <h2>Current Theme: {theme}</h2>
  );
}

export default Header4;