import { useState } from "react";
import { patchUser } from "../api/api";

function PatchUser() {
  const [message, setMessage] = useState("");

  async function handlePatch() {
    try {
      const data = await patchUser(1, {
        name: "Only Name Updated",
      });

      console.log(data);

      setMessage("User name updated successfully!");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  }

  return (
    <div className="card">
      <h2>PATCH - Partial Update</h2>

      <button onClick={handlePatch}>
        Update Name
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default PatchUser;