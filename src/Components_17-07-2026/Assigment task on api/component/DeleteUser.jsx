import { useState } from "react";

function DeleteUser() {
  const [message, setMessage] = useState("");

  async function deleteUser() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      setMessage("User deleted successfully!");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  }

  return (
    <div className="card">
      <h2>DELETE - Delete User</h2>

      <button onClick={deleteUser}>
        Delete User
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteUser;