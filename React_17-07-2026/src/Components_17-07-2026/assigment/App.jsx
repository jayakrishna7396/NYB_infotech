import { useState } from "react";

function App() {
  // Local State
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Event-based State Update
  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <h1>Local State Example</h1>

      <h2>Counter</h2>
      <p>Count: {count}</p>

      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>

      <hr />

      <h2>Name Example</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello, {name}</p>
    </div>
  );
}

export default App;

// How useState works
// This line creates a local state:
const [count, setCount] = useState(0);

// Event-Based State Update
// When the user clicks this button:
<button onClick={increaseCount}>Increase</button>