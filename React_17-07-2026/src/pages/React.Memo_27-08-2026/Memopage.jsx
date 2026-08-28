import { useState } from "react";
import Child from "../Components/Child";

function MemoPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React.memo() Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Child name="Jayakrishna" />
    </div>
  );
}

export default MemoPage;