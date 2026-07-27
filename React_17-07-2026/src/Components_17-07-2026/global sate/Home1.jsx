import { useContext } from "react";


function Home1() {

  const { theme,changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Theme: {theme}</h2>

      <button onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default Home1;
