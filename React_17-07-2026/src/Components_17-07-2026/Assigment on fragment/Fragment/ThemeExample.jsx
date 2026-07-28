import useTheme from "../Hooks/UseTheme";

function ThemeExample() {
  const {
    darkMode,
    toggleTheme
  } = useTheme();

  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        padding: "20px"
      }}
    >
      <h2>Theme Management</h2>

      <p>
        Current Theme:
        {darkMode ? " Dark" : " Light"}
      </p>

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default ThemeExample;