import { useState } from "react";
import Modal from "./Modal";

function LoginModal({ closeLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    alert(`Welcome ${username}!`);

    closeLogin();
  };

  return (
    <Modal closeModal={closeLogin}>

      <h2>Login Form</h2>

      <form onSubmit={handleLogin}>

        <div className="form-group">
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />
        </div>

        <button>
          type="submit"
          className="primary-button"
        
          Login
        </button>

      </form>

    </Modal>
  );
}

export default LoginModal;