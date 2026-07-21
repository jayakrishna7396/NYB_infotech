import { useUser } from "../context/UserContext";

function UserProfile() {
  const user = useUser();

  return (
    <div>
      <h2>User Profile</h2>

      <p>Name: {user.name}</p>

      <p>Email: {user.email}</p>

      <p>Role: {user.role}</p>
    </div>
  );
}

export default UserProfile;