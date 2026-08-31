import { useState } from "react";

function UpdateUser() {
  const [message, setMessage] = useState("");

  async function updateUser() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: "Updated User",
            username: "updateduser",
            email: "updated@example.com",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      const data = await response.json();

      console.log("Updated User:", data);

      setMessage("User updated successfully!");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  }

  return (
    <div className="card">
      <h2>PUT - Update User</h2>

      <button onClick={updateUser}>
        Update User
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateUser;