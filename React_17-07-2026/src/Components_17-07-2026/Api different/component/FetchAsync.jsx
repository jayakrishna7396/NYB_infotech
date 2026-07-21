import { useEffect, useState } from "react";

function FetchAsync() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

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
      <h2>Method 2: Fetch with Async/Await</h2>

      {users.slice(0, 5).map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}

export default FetchAsync;