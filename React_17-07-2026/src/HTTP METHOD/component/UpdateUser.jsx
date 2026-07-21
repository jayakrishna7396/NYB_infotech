import { useState } from "react";
import { updateUser } from "../api/api";

function UpdateUser() {
  const [message, setMessage] = useState("");

  async function handleUpdate() {
    try {
      const updatedUser = {
        name: "Updated User",
        email: "updated@example.com",
      };

      const data = await updateUser(1, updatedUser);

      console.log(data);

      setMessage("User updated successfully!");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  }

  return (
    <div className="card">
      <h2>PUT - Update User</h2>

      <button onClick={handleUpdate}>
        Update User
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateUser;