import { useEffect, useState } from "react";

function XMLHttpRequestApi() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();

    xhr.open(
      "GET",
      "https://jsonplaceholder.typicode.com/users"
    );

    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);

        setUsers(data);
      }
    };

    xhr.onerror = () => {
      console.log("Request failed");
    };

    xhr.send();

    return () => {
      xhr.abort();
    };
  }, []);

  return (
    <div className="card">
      <h2>3. XMLHttpRequest</h2>

      {users.slice(0, 5).map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}

export default XMLHttpRequestApi;