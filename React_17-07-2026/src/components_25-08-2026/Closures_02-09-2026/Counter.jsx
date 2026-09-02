import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const createMessage = () => {
    return () => {
      alert(`Current count is ${count}`);
    };
  };

  const showMessage = createMessage();

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={showMessage}>
        Show Count
      </button>
    </div>
  );
};

export default Counter;