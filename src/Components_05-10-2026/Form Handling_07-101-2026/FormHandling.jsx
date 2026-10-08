import { useState } from "react";

function FormHandling() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <div>
      <h2>Form Handling</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default FormHandling;