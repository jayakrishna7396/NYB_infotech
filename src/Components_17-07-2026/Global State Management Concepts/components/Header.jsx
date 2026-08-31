import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Header() {

  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Header</h2>
      <p>Welcome, {user}</p>
    </div>
  );
}

export default Header;