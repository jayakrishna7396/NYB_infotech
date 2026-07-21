import { useState } from "react";

function UseHook() {

  // Create a state variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useState Hook Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default UseHook;


// output
// useState Hook Example
// Count: 0
// [Increase]  [Decrease]  [Reset]

// after clicking increases
// Count: 1

// after clicking decreases
// Count: 0

// after clicking Reset
// Count: 0