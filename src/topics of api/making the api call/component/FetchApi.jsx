import { useEffect, useState } from "react";

function FetchApi() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div className="card">
      <h2>1. Fetch API</h2>

      {users.slice(0, 5).map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}

export default FetchApi;