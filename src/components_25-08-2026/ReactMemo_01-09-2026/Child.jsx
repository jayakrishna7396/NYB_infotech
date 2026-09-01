import React from "react";

function Child({ name }) {
  console.log("Child Rendered");

  return (
    <div>
      <h2>Child Component</h2>
      <p>Hello {name}</p>
    </div>
  );
}

export default React.memo(Child);