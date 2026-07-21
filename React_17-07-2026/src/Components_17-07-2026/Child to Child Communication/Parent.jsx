import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function App() {
  const [message, setMessage] = useState("");

  function receiveMessage(data) {
    setMessage(data);
  }

  return (
    <div>
      <h1>Parent Component</h1>

      <Child1 sendMessage={receiveMessage} />

      <Child2 message={message} />
    </div>
  );
}

export default App;