import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserDisplay = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>User: {user}</h2>

      <button onClick={() => setUser("React Student")}>
        Change User
      </button>
    </div>
  );
};

export default UserDisplay;