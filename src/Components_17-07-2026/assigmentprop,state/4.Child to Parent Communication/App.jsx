import { useState } from "react";
import Child from "./Child";

function App() {
  const [message, setMessage] = useState("No message received");

  // Callback function
  function receiveData(data) {
    setMessage(data);
  }

  return (
    <div>
      <h1>Parent Component</h1>

      <h2>Message: {message}</h2>

      <Child sendData={receiveData} />
    </div>
  );
}

export default App;