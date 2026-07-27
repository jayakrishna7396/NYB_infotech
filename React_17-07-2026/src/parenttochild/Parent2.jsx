import { useState } from "react";
import Child2 from "./Child2";

function Parent2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>Registration Form</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      {/* Sending data from Parent to Child */}
      <Child2 name={name} email={email} />
    </div>
  );
}

export default Parent2;