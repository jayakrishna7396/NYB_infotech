import React from "react";

function Child({ handleClick }) {
  console.log("Child Rendered");

  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={handleClick}>
        Click Child Button
      </button>
    </div>
  );
}

export default React.memo(Child);