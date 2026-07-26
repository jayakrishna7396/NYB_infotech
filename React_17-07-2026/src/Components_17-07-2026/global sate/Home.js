import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home() {

  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Theme: {theme}</h2>

      <button onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default Home;
