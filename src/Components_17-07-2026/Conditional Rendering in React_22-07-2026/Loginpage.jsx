import { useState } from "react";

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [role, setRole] = useState("admin");

  // 1. IF-ELSE
  function checkLogin() {
    if (isLoggedIn) {
      return <p>You are Logged In</p>;
    } else {
      return <p>You are Logged Out</p>;
    }
  }

  // 2. SWITCH
  function checkRole() {
    switch (role) {
      case "admin":
        return <p>Welcome Admin</p>;

      case "user":
        return <p>Welcome User</p>;

      case "guest":
        return <p>Welcome Guest</p>;

      default:
        return <p>Unknown Role</p>;
    }
  }

  return (
    <div>
      <h1>Conditional Rendering</h1>

      {/* 1. IF-ELSE */}
      <h2>1. If-Else</h2>
      {checkLogin()}

      {/* 2. TERNARY OPERATOR */}
      <h2>2. Ternary Operator</h2>
      <p>
        {isLoggedIn ? "Welcome to React" : "Please Login"}
      </p>

      {/* 3. LOGICAL AND && */}
      <h2>3. Logical AND (&&)</h2>
      {isLoggedIn && <p>You can see this message because you are logged in.</p>}

      {/* 4. SWITCH */}
      <h2>4. Switch</h2>
      {checkRole()}

      <hr />

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <br />
      <br />

      <button onClick={() => setRole("admin")}>Admin</button>
      <button onClick={() => setRole("user")}>User</button>
      <button onClick={() => setRole("guest")}>Guest</button>
    </div>
  );
}

export default LoginPage;