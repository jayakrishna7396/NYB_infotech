import React from "react";

const Child = React.memo(({ name }) => {
  console.log("Child Component Rendered");

  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {name}</p>
    </div>
  );
});

export default Child;