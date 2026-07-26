import { useEffect, useState } from "react";

import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

import withLoading from "./hoc/withLoading";

import "./App.css";


// Add Loading functionality to UserList
const UserListWithLoading = withLoading(UserList);


function App() {

  // Store API users
  const [users, setUsers] = useState([]);

  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");

  // Show/hide users
  const [showUsers, setShowUsers] = useState(true);


  // API Integration using useEffect
  useEffect(() => {

    const fetchUsers = async () => {

      try {

        setIsLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);

      } catch (error) {

        setError(error.message);

      } finally {

        setIsLoading(false);

      }
    };

    fetchUsers();

  }, []);


  // Add new user
  const addUser = (newUser) => {

    const newUserData = {
      id: users.length + 1,
      name: newUser.name,
      email: newUser.email,
      phone: "Not Available",
      address: {
        city: newUser.city
      }
    };

    setUsers([
      ...users,
      newUserData
    ]);
  };


  return (
    <div className="container">

      <h1>User Management Dashboard</h1>


      {/* Dynamic Form */}

      <UserForm
        onAddUser={addUser}
      />


      <hr />


      {/* Conditional Rendering */}

      <button
        onClick={() =>
          setShowUsers(!showUsers)
        }
      >
        {showUsers
          ? "Hide Users"
          : "Show Users"}
      </button>


      {/* Error Handling */}

      {error && (
        <h2 className="error">
          Error: {error}
        </h2>
      )}


      {/* Conditional Rendering + HOC */}

      {showUsers && (

        <UserListWithLoading
          isLoading={isLoading}
          users={users}
        />

      )}

    </div>
  );
}

export default App;