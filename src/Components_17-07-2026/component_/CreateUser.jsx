import { useState } from "react";
import { createUser } from "../api/api";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const newUser = {
        name: name,
        email: email,
      };

      const data = await createUser(newUser);

      console.log(data);

      setMessage("User created successfully!");

      setName("");
      setEmail("");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  }

  return (
    <div className="card">
      <h2>POST - Create User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type="submit">
          Create User
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateUser;