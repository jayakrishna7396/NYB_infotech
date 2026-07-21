import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function App() {
  // Centralized State
  const [message, setMessage] = useState("No message received");

  // Callback function to receive data from Child1
  function receiveMessage(data) {
    setMessage(data);
  }

  return (
    <div>
      <h1>Parent Component</h1>

      <Child1 sendMessage={receiveMessage} />

      <hr />

      <Child2 message={message} />
    </div>
  );
}

export default App;