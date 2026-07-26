import { useContext } from "react";
import { UserContext } from "./context/UserContext.jsx";

function App() {

  // Get data from Context
  const userName = useContext(UserContext);

  return (
    <div>
      <h1>Welcome</h1>

      <h2>{userName}</h2>
    </div>
  );
}

export default App;