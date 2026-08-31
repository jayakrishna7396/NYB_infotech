
import { memo } from "react";

function Childmemo({ name }) {
  console.log("Child Component Rendered");

  return (
    <div>
      <h2>Child Component</h2>

      <h3>Hello, {name}</h3>
    </div>
  );
}

export default Childmemo
