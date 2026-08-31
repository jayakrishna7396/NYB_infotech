import { useState } from "react";

function FormEvents() {
const [name, setName] = useState("");
const [message, setMessage] = useState("");

function handleChange(event) {
setName(event.target.value);
}

function handleSubmit(event) {
event.preventDefault();


setMessage("Form submitted successfully!");


}

function handleFocus() {
setMessage("Input is focused");
}

function handleBlur() {
setMessage("Input lost focus");
}

function handleClick() {
setMessage("Click event occurred!");
}

return ( <div className="card"> 
<h2>Form Events</h2>


  <p>{message}</p>

  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={name}
      placeholder="Enter your name"
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />

    <p>Your name: {name}</p>

    <button
      type="button"
      onClick={handleClick}
    >
      Click Event
    </button>

    <button type="submit">
      Submit Form
    </button>
  </form>
</div>


);
}

export default FormEvents;
