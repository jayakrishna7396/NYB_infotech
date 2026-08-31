import { useEffect, useState } from "react";
import axios from "axios";

function AxiosExample() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div className="card">
      <h2>Method 3: Axios</h2>

      {users.slice(0, 5).map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}

export default AxiosExample;