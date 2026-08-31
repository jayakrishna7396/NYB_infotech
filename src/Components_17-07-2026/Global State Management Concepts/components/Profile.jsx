import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {

  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>
      <p>User Name: {user}</p>
    </div>
  );
}

export default Profile;