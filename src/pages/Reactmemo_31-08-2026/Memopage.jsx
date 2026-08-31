import { useState } from "react";
import Child from "../../components_25-08-2026/Reactmemo_31-08-2026/Child";

function MemoPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React.memo() Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <Child name="Jayakrishna" />
    </div>
  );
}

export default MemoPage;