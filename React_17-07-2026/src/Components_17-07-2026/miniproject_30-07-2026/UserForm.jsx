import { useState } from "react";

function UserForm() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");

const [message, setMessage] = useState("");

// Change Event
function handleNameChange(event) {
setName(event.target.value);
}

// Change Event
function handleEmailChange(event) {
setEmail(event.target.value);
}

// Focus Event
function handleFocus() {
setMessage("Input field is focused");
}

// Blur Event
function handleBlur() {
setMessage("Input field lost focus");
}

// Submit Event
function handleSubmit(event) {
event.preventDefault();


setMessage(
  "Form submitted successfully!"
);


}

return ( <div className="form-container">

  <h2>User Registration</h2>

  <p className="message">
    {message}
  </p>

  <form onSubmit={handleSubmit}>

    <label>
      Name
    </label>

    <input
      type="text"
      value={name}
      placeholder="Enter your name"
      onChange={handleNameChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />

    <label>
      Email
    </label>

    <input
      type="email"
      value={email}
      placeholder="Enter your email"
      onChange={handleEmailChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />

    <p>
      Name: {name}
    </p>

    <p>
      Email: {email}
    </p>

    <button type="submit">
      Submit
    </button>

  </form>

</div>


);
}

export default UserForm;
