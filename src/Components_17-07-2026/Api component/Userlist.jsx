import { useEffect, useState } from "react";

function UserList() {
  // Store API data
  const [users, setUsers] = useState([]);

  // Store loading status
  const [loading, setLoading] = useState(true);

  // Store error message
  const [error, setError] = useState("");

  // API call
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Loading message
  if (loading) {
    return <h2>Loading users...</h2>;
  }

  // Error message
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <h3>{user.name}</h3>

          <p>Email: {user.email}</p>

          <p>Phone: {user.phone}</p>

          <p>City: {user.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;