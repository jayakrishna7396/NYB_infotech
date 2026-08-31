import { useUser } from "../context/UserContext";

function UserProfile() {
  // Get User Information from Context
  const user = useUser();

  return (
    <div className="card">
      <h2>User Information</h2>

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </div>
  );
}

export default UserProfile;