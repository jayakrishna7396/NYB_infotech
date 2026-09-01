import { useState } from "react";

function FormValidation() {
  const [name, setName] = useState("");

  const submitForm = (event) => {
    event.preventDefault();

    if (name === "") {
      alert("Please enter name");
    } else {
      alert("Success");
    }
  };

  return (
    <div>
      <h2>Form Validation</h2>

      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;