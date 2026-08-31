import { useState } from "react";

function PatchUser() {
  const [message, setMessage] = useState("");

  async function patchUser() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: "Only Name Updated",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      const data = await response.json();

      console.log("Patched User:", data);

      setMessage("User name updated successfully!");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  }

  return (
    <div className="card">
      <h2>PATCH - Partial Update</h2>

      <button onClick={patchUser}>
        Update Name
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default PatchUser;