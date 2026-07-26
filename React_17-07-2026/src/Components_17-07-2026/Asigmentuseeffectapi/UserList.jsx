import { useEffect, useState } from "react";
import { axiosUsers } from "../services/api";

function UserList() {
  // API data
  const [users, setUsers] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);

        const data = await axiosUsers();

        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  // Loading state
  if (loading) {
    return <h2>Loading users...</h2>;
  }

  // Error state
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Users List</h2>

      {/* Display API data using map() */}

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