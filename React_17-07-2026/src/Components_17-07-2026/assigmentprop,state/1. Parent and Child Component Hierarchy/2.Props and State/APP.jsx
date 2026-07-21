import { useState } from "react";
import Student from "./Student";

function App() {
  // State
  const [count, setCount] = useState(0);

  // Props Data
  const studentName = "Jaya Krishna";
  const course = "React JS";

  return (
    <div>
      <h1>Props and State Example</h1>

      <Student
        name={studentName}
        course={course}
      />

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default App;