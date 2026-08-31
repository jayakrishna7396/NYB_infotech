import { useState } from "react";

function ConditionalExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>1. Conditional Rendering</h2>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {isLoggedIn ? (
        <h3>Welcome! You are logged in.</h3>
      ) : (
        <h3>Please login.</h3>
      )}
    </div>
  );
}

export default ConditionalExample;