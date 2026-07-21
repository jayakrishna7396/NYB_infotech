import { useEffect, useState } from "react";

function AsyncAwaitApi() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="card">
      <h2>4. Async/Await</h2>

      {users.slice(0, 5).map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}

export default AsyncAwaitApi;