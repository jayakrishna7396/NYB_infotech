import { useEffect, useState } from "react";

function UserList() {
  // State to store users
  const [users, setUsers] = useState([]);

  // State to store loading status
  const [loading, setLoading] = useState(true);

  // State to store error
  const [error, setError] = useState("");

  // API Request
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("Status Code:", response.status);

        // Check HTTP Status Code
        if (!response.ok) {
          throw new Error("API Request Failed");
        }

        // Convert Response to JSON
        return response.json();
      })
      .then((data) => {
        // Store JSON data in State
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
    return <h2>Loading Users...</h2>;
  }

  // Error message
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className="card">
      <h2>REST API Example</h2>

      <p>
        HTTP Method: <strong>GET</strong>
      </p>

      <p>
        API URL:
        <br />
        https://jsonplaceholder.typicode.com/users
      </p>

      <h3>Users from JSON Response</h3>

      {users.map((user) => (
        <div className="user" key={user.id}>
          <p>
            <strong>ID:</strong> {user.id}
          </p>

          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      ))}
    </div>
  );
}

export default UserList;