import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function ContextExample() {

  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Context API Example</h2>

      <p>User: {user}</p>

      <button onClick={() => setUser("Krishna")}>
        Change User
      </button>
    </div>
  );
}

export default ContextExample;