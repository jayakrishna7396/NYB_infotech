import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext.jsx";

function App() {

  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Context API Example</h1>

      <h2>Current Theme: {theme}</h2>

      <button onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default App;