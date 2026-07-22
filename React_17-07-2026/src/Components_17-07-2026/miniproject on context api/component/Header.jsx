import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Header() {

  const { student } = useContext(UserContext);

  return (
    <header>
      <h2>Student Management App</h2>

      <p>Welcome, {student}</p>
    </header>
  );
}

export default Header;