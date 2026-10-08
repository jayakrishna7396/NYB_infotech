import { useState } from "react";

function EventHandling() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    alert("Hello " + name);
  };

  return (
    <div>
      <h2>Event Handling</h2>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleClick}>
        Click Me
      </button>

      <p>Name: {name}</p>
    </div>
  );
}

export default EventHandling;