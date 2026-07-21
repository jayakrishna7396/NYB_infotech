import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
  const [message, setMessage] = useState("Hello");

  return (
    <>
      <Child1 setMessage={setMessage} />
      <Child2 message={message} />
    </>
  );
}

export default Parent;