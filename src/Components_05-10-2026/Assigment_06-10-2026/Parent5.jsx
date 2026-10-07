import { useState } from "react";
import Child from "./Child";
import GrandChild from "./GrandChild";

function Parent5() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleChildMessage = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <Child
        name="Krishna"
        age={22}
        isStudent={true}
        onMessage={handleChildMessage}
      />

      {message && <p>Parent received: {message}</p>}

      <GrandChild message="This is data from Parent to GrandChild" />

      {count >= 3 && <p>Count is greater than or equal to 3</p>}
    </div>
  );
}

export default Parent5;