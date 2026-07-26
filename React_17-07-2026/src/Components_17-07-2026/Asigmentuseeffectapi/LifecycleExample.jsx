import { useEffect, useState } from "react";

function LifecycleExample() {
  const [count, setCount] = useState(0);

  // 1. useEffect WITHOUT dependency array
  // Runs after every render
  useEffect(() => {
    console.log("Effect without dependency array");
  });

  // 2. useEffect WITH empty dependency array
  // Runs when component is mounted
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // 3. useEffect WITH dependency
  // Runs whenever count changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>useEffect Lifecycle Examples</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default LifecycleExample;