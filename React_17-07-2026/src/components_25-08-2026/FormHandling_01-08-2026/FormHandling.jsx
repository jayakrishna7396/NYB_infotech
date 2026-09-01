import { useState } from "react";

function FormHandling() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Name: ${name}\nEmail: ${email}`);

    setName("");
    setEmail("");
  };

  return (
    <div>
      <h1>React Form Handling</h1>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <br />

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <br />
        <br />

        <label>Email:</label>
        <br />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <br />
        <br />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default FormHandling;