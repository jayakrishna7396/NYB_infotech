import { useState } from "react";
import { deleteUser } from "../api/api";

function DeleteUser() {
  const [message, setMessage] = useState("");

  async function handleDelete() {
    try {
      await deleteUser(1);

      setMessage("User deleted successfully!");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  }

  return (
    <div className="card">
      <h2>DELETE - Delete User</h2>

      <button onClick={handleDelete}>
        Delete User
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteUser;