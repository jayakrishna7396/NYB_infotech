import { useEffect, useState } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered");
  });

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>2. useEffect Hook</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default UseEffectExample;