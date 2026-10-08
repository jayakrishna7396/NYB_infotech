import { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Conditional Rendering</h2>

      {isLoggedIn ? (
        <h3>Welcome, User!</h3>
      ) : (
        <h3>Please Login</h3>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default ConditionalRendering;