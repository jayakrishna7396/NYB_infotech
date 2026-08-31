import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>

      {isLoggedIn ? (
        <p>Welcome! You are logged in.</p>
      ) : (
        <p>Please login to access the dashboard.</p>
      )}
    </div>
  );
}

export default Dashboard;