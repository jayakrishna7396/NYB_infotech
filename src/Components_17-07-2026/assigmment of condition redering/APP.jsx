import { useState } from "react";
import "./App.css";

function App() {
  // Login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // User role
  const [role, setRole] = useState("user");

  // Show or hide message
  const [showMessage, setShowMessage] = useState(false);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Empty state
  const [items, setItems] = useState([]);

  // -----------------------------------
  // 1. IF-ELSE CONDITIONAL RENDERING
  // -----------------------------------

  function checkLogin() {
    if (isLoggedIn) {
      return <h2>Welcome! You are logged in.</h2>;
    } else {
      return <h2>Please login to continue.</h2>;
    }
  }

  // -----------------------------------
  // 2. SWITCH CASE
  // -----------------------------------

  function showRole() {
    switch (role) {
      case "admin":
        return <h3>Admin: You can manage everything.</h3>;

      case "user":
        return <h3>User: You can view the website.</h3>;

      case "guest":
        return <h3>Guest: You have limited access.</h3>;

      default:
        return <h3>Unknown Role</h3>;
    }
  }

  // -----------------------------------
  // LOADING FUNCTION
  // -----------------------------------

  function startLoading() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <div className="container">

      <h1>Conditional Rendering Assignment</h1>

      <hr />

      {/* -----------------------------------
          1. IF-ELSE
      ----------------------------------- */}

      <h2>1. If-Else Example</h2>

      {checkLogin()}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <hr />

      {/* -----------------------------------
          2. TERNARY OPERATOR
      ----------------------------------- */}

      <h2>2. Ternary Operator</h2>

      <p>
        Status: {isLoggedIn ? "Logged In" : "Logged Out"}
      </p>

      <hr />

      {/* -----------------------------------
          3. LOGICAL && OPERATOR
      ----------------------------------- */}

      <h2>3. Logical AND Operator</h2>

      <button onClick={() => setShowMessage(!showMessage)}>
        Show / Hide Message
      </button>

      {showMessage && (
        <p>
          This message is visible because showMessage is true.
        </p>
      )}

      <hr />

      {/* -----------------------------------
          4. SWITCH CASE
      ----------------------------------- */}

      <h2>4. Switch Case</h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="guest">Guest</option>
      </select>

      {showRole()}

      <hr />

      {/* -----------------------------------
          5. USER AUTHENTICATION
      ----------------------------------- */}

      <h2>5. Authentication Status</h2>

      {isLoggedIn ? (
        <div>
          <h3>Dashboard</h3>
          <p>You can access your account.</p>
        </div>
      ) : (
        <div>
          <h3>Login Required</h3>
          <p>Please login first.</p>
        </div>
      )}

      <hr />

      {/* -----------------------------------
          6. USER ROLE
      ----------------------------------- */}

      <h2>6. User Role</h2>

      {role === "admin" && (
        <button>Delete User</button>
      )}

      {role === "user" && (
        <button>View Profile</button>
      )}

      {role === "guest" && (
        <button>Login</button>
      )}

      <hr />

      {/* -----------------------------------
          7. LOADING STATE
      ----------------------------------- */}

      <h2>7. Loading State</h2>

      <button onClick={startLoading}>
        Start Loading
      </button>

      {loading && <p>Loading... Please wait.</p>}

      {!loading && <p>Data loaded successfully!</p>}

      <hr />

      {/* -----------------------------------
          8. EMPTY STATE
      ----------------------------------- */}

      <h2>8. Empty State</h2>

      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        items.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      )}

      <button
        onClick={() => setItems(["Item 1", "Item 2", "Item 3"])}
      >
        Add Items
      </button>

    </div>
  );
}

export default App;