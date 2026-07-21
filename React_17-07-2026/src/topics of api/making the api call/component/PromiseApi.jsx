import { useEffect, useState } from "react";

function PromiseApi() {
  const [users, setUsers] = useState([]);

  function getUsers() {
    return fetch(
      "https://jsonplaceholder.typicode.com/users"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }

        return response.json();
      })
      .then((data) => {
        return data;
      });
  }

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div className="card">
      <h2>5. Promise-Based API Call</h2>

      {users.slice(0, 5).map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}

export default PromiseApi;