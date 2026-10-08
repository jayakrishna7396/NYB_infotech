import { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or count changed");

    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>useEffect Example</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default UseEffect;