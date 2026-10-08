import { useState } from "react";

function InputHandling() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Input Handling</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />

      <p>You entered: {name}</p>
    </div>
  );
}

export default InputHandling;