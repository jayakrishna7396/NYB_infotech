// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

function Home2() {

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

export default Home2;
