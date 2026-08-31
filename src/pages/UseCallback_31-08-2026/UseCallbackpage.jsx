import { useState, useCallback } from "react";
import CallbackChild from "../../components_25-08-2026//CallbackChild_31-08-2026/CallbackChild"

function UseCallbackPage() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    alert("Hello from Child Component");
  }, []);

  return (
    <div>
      <h1>useCallback() Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br />
      <br />

      <CallbackChild handleClick={handleClick} />
    </div>
  );
}

export default UseCallbackPage;