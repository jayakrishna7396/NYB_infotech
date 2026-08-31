import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";

function Header() {
  // Consume Theme Context
  const { theme } = useTheme();

  // Consume User Context
  const user = useUser();

  return (
    <header>
      <h1>React State Management App</h1>

      <p>Welcome, {user.name}</p>

      <p>Current Theme: {theme}</p>
    </header>
  );
}

export default Header;