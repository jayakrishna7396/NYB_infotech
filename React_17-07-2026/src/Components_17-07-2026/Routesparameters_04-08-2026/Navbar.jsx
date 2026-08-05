
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>My React App</h2>

      <div>
        <Link to="/">Home</Link>

        {" | "}

        <Link to="/users">Users</Link>
      </div>
    </nav>
  );
}

export default Navbar;
