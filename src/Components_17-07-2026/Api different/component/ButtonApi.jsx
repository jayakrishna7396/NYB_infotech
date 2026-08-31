import { useState } from "react";

function ButtonApi() {
  const [user, setUser] = useState(null);

  async function getUser() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      const data = await response.json();

      setUser(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <div className="card">
      <h2>Method 4: API Call on Button Click</h2>

      <button onClick={getUser}>
        Get User
      </button>

      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}
    </div>
  );
}

export default ButtonApi;