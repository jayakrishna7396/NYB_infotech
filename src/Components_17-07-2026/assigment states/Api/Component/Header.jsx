import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <header>
      <h1>Context API App</h1>

      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme}>
        Change Theme
      </button>

      <br />
      <br />

      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </header>
  );
}

export default Header;