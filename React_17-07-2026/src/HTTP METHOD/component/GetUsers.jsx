import { useEffect, useState } from "react";
import { getUsers } from "../api/api";

function GetUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadUsers() {
    try {
      setLoading(true);
      setError("");

      const data = await getUsers();

      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="card">
      <h2>GET - Users</h2>

      <button onClick={loadUsers}>
        Refresh Users
      </button>

      {users.slice(0, 5).map((user) => (
        <div key={user.id}>
          <p>
            <strong>{user.name}</strong>
          </p>

          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default GetUsers;