import { useState } from "react";

const FunctionExample = () => {
  const [count, setCount] = useState(0);

  // Pure function
  const add = (a, b) => {
    return a + b;
  };

  // Impure function example
  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Pure Function</h2>
      <p>{add(10, 20)}</p>

      <h2>Impure Function</h2>
      <p>Count: {count}</p>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
};

export default FunctionExample;