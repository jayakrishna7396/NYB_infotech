import { useState } from "react";

function Signup() {
  const [status, setStatus] = useState("signup");

  function showPage() {
    switch (status) {
      case "signup":
        return (
          <div>
            <h2>Sign Up</h2>

            <input type="text" placeholder="Enter Name" />
            <br /><br />

            <input type="email" placeholder="Enter Email" />
            <br /><br />

            <input type="password" placeholder="Enter Password" />
            <br /><br />

            <button onClick={() => setStatus("success")}>
              Sign Up
            </button>
          </div>
        );

      case "success":
        return (
          <div>
            <h2>Signup Successful!</h2>
            <p>Your account has been created.</p>

            <button onClick={() => setStatus("login")}>
              Go to Login
            </button>
          </div>
        );

      case "login":
        return (
          <div>
            <h2>Login</h2>

            <input type="email" placeholder="Enter Email" />
            <br /><br />

            <input type="password" placeholder="Enter Password" />
            <br /><br />

            <button>Login</button>
          </div>
        );

      default:
        return <h2>Page Not Found</h2>;
    }
  }

  return (
    <div>
      <h1>Signup Application</h1>

      {showPage()}
    </div>
  );
}

export default Signup;