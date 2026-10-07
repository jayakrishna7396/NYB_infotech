import { useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

function Parent4() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>Parent Component</h1>

      <ChildOne sendData={setMessage} />

      <ChildTwo message={message} />
    </div>
  );
}

export default Parent4;