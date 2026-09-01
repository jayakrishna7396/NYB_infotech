import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Name: ${name}`);
  };

  return (
    <div>
      <h2>Controlled Component</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <p>Your name: {name}</p>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ControlledForm;