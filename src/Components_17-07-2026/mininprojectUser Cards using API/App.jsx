import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import { getUsers } from "./services/api";
import "./App.css";

function App() {

  // Store users
  const [users, setUsers] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");

  // API call
  useEffect(() => {

    const fetchUsers = async () => {

      try {
        // Start loading
        setLoading(true);

        // Get users from API
        const data = await getUsers();

        // Store users
        setUsers(data);

      } catch (error) {

        // Store error message
        setError(error.message);

      } finally {

        // Stop loading
        setLoading(false);

      }
    };

    fetchUsers();

  }, []);


  // Loading condition
  if (loading) {
    return <h2 className="message">Loading users...</h2>;
  }


  // Error condition
  if (error) {
    return <h2 className="message">Error: {error}</h2>;
  }


  return (
    <div className="container">

      <h1>User Cards</h1>

      <div className="card-container">

        {/* Display users using map() */}

        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}

      </div>

    </div>
  );
}

export default App;