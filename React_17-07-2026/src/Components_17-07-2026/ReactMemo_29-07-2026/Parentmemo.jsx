
import { useState } from "react";

function Parentmemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Component</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <hr />

      <Child name="Jaya Krishna" />
    </div>
  );
}

const Child = () => <div></div>;
export default Parentmemo;

