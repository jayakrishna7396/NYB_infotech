import { useEffect, useState } from "react";

function APIResponse() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data);

        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>API Response Handling</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>

          <p>Email: {user.email}</p>

          <p>City: {user.address.city}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default APIResponse;