import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [name] = useState("Jay");

  return (
    <div>
      <h1>React.memo() Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Child name={name} />
    </div>
  );
}

export default Parent;