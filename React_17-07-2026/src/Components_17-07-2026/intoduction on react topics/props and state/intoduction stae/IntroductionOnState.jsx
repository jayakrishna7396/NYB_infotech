// State is data that belongs to a component and can change over time.

// React provides the useState Hook to manage state.

// Example:

// App.jsx
import { useState } from "react";

 function IntroductionOnState() { 
  const [count, setCount] = useState(0);

 return ( 
    <div>
      <h1>Counter App</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
    );
} 

export default IntroductionOnState;