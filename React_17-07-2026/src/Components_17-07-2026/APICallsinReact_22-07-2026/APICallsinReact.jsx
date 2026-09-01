import React, { useEffect, useState } from 'react';


function APicallinReact() {
  // Store API data
  const [users, setUsers] = useState([]);

  // Store loading status
  const [loading, setLoading] = useState(true);

  // Store error
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, []);

  // Loading state
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Error state
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>User List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default APicallinReact;