import { useState } from "react";

function EventDemo() {

const [message, setMessage] = useState(
"Click a button"
);

// Click Event
function handleClick() {
setMessage(
"You clicked the button!"
);
}

// Parameter Event
function handleUser(name) {
setMessage(
"Hello " + name + "!"
);
}

return ( <div className="event-container">


  <h2>Event Binding Demo</h2>

  <p>
    {message}
  </p>

  {/* Function Reference */}

  <button onClick={handleClick}>
    Click Event
  </button>

  {/* Passing Parameter */}

  <button
    onClick={() =>
      handleUser("Jaya")
    }
  >
    Say Hello
  </button>

</div>

);
}

export default EventDemo;
