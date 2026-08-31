import { useState } from "react";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function createUser(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: name,
            email: email,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const data = await response.json();

      console.log("Created User:", data);

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

      <form onSubmit={createUser}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
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