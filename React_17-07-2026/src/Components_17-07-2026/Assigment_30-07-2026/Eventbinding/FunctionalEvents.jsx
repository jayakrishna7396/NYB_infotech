import { useState } from "react";

function FunctionalEvents() {
const [message, setMessage] = useState("No button clicked");

// Function Reference
function handleClick() {
setMessage("Button clicked using function reference!");
}

// Change Event
function handleChange(event) {
setMessage("You entered: " + event.target.value);
}

return ( <div className="card">
     <h2>Functional Component Events</h2>

  <p>{message}</p>

  {/* Function Reference */}
  <button onClick={handleClick}>
    Function Reference
  </button>

  {/* Inline Event Handler */}
  <button
    onClick={() =>
      setMessage("Button clicked using inline event handling!")
    }
  >
    Inline Event
  </button>

  <br />
  <br />

  {/* Change Event */}
  <input
    type="text"
    placeholder="Type something"
    onChange={handleChange}
  />
</div>


);
}

export default FunctionalEvents;
