import { useEffect, useState } from "react";

function APIcall() {
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
    <div>
      <h1>Users</h1>

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

export default APIcall;