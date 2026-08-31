import { useState } from "react";

import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";
import Profile from "./components/Profile";

import withAuth from ".withAuth";
import withLoading from ".withLoading";
import withAuthorization from ".withAuthorization";

// Authentication HOC
const ProtectedDashboard = withAuth(Dashboard);


// Loading HOC
const DashboardWithLoading = withLoading(Dashboard);


// Authorization HOC
const AdminOnly = withAuthorization(
  AdminPanel,
  "admin"
);


function App() {

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [isLoading, setIsLoading] =
    useState(false);

  const [userRole, setUserRole] =
    useState("user");


  // Simulate loading
  const startLoading = () => {

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  };


  return (
    <div className="container">

      <h1>Higher Order Components</h1>

      <hr />


      {/* Authentication HOC */}

      <h2>1. Authentication HOC</h2>

      <button
        onClick={() =>
          setIsLoggedIn(!isLoggedIn)
        }
      >
        {isLoggedIn
          ? "Logout"
          : "Login"}
      </button>

      <ProtectedDashboard
        isLoggedIn={isLoggedIn}
      />


      <hr />


      {/* Loading HOC */}

      <h2>2. Loading HOC</h2>

      <button onClick={startLoading}>
        Start Loading
      </button>

      <DashboardWithLoading
        isLoading={isLoading}
      />


      <hr />


      {/* Authorization HOC */}

      <h2>3. Authorization HOC</h2>

      <select
        value={userRole}
        onChange={(e) =>
          setUserRole(e.target.value)
        }
      >
        <option value="user">
          User
        </option>

        <option value="admin">
          Admin
        </option>
      </select>

      <AdminOnly
        userRole={userRole}
      />


      <hr />


      {/* Normal Component */}

      <h2>4. Normal Component</h2>

      <Profile />

    </div>
  );
}

export default App;