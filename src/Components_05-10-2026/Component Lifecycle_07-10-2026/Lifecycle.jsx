import { useEffect, useState } from "react";

function Lifecycle() {
  const [count, setCount] = useState(0);

  // Mounting and Unmounting
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // Updating
  useEffect(() => {
    console.log("Component Updated");
  }, [count]);

  return (
    <div>
      <h2>Component Lifecycle</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Update
      </button>
    </div>
  );
}

export default Lifecycle;