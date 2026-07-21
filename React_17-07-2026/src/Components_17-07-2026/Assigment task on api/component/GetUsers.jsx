import { useEffect, useState } from "react";

function GetUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function getUsers() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      // Check response
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      // Convert response to JSON
      const data = await response.json();

      // Store data
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  return (
    <div className="card">
      <h2>GET - Get Users</h2>

      <button onClick={getUsers}>
        Refresh Users
      </button>

      {users.slice(0, 5).map((user) => (
        <div className="user" key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default GetUsers;