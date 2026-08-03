import { useState } from "react";

function StateDestructuring() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>4. State Destructuring</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default StateDestructuring;