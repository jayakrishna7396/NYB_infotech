import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>State Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default State;