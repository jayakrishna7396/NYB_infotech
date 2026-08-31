import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter Component</h2>

      <p>Current Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Add
      </button>

      <button onClick={() => setCount(count - 1)}>
        Subtract
      </button>
    </div>
  );
}

export default Counter;