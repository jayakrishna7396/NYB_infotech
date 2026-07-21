import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Home() {

  const { name, setName } = useContext(UserContext);

  return (
    <div>
      <h2>Name: {name}</h2>

      <button onClick={() => setName("Jaya Krishna")}>
        Change Name
      </button>
    </div>
  );
}

export default Home;




// Output
// Before clicking the button
// Name: Krishna
// [Change Name]

// After clicking the button
// Name: Jaya Krishna


// Simple Definition
// State Management using Context API means storing shared data in a Context so multiple components can access and update the same state without passing props from one component to another.

// In this example:
// UserContext stores the shared name state.
// UserProvider provides the state.
// Home reads and updates the state using useContext().
// When the state changes, React automatically updates the UI.
// This is one of the easiest and most common examples to demonstrate State Management using Context API in a React assignment.