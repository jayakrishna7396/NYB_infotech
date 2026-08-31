// definition of local state
// Local State is the data that belongs to only one component. 
// It is created and managed inside that component using the useState Hook. Other components cannot access or change it unless it is passed through props.

import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
 
// after click the button
// Count: 1
// Count: 2
// Count: 3


// Example 2: Input Box (Local State)
import { useState } from "react";

function Name() {

  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello {name}</h2>
    </div>
  );
}

export default Name;


// If the user types:
// Krishna
// The output becomes:
// Hello Krishna