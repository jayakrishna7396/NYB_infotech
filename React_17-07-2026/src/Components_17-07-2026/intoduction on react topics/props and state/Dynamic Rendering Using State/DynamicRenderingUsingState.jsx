// Now let's use state to dynamically change the UI.

// App.jsx
import { useState } from "react";

function DynamicRenderingUsingState() {
  const [name, setName] = useState("Jaya");

  return (
    <div>
      <h1>Student Name</h1>

      <h2>{name}</h2>

      <button onClick={() => setName("Rahul")}>
        Change Name
      </button>
    </div>
     );
}

export default DynamicRenderingUsingState;

// Initially:

// Student Name

// Jaya

// [Change Name]

// After clicking the button:

// Student Name

// Rahul

// The state changes from:

// Jaya → Rahul 
// React automatically renders the new value 