import React from "react";

const CallbackChild = React.memo(({ handleClick }) => {
  console.log("Child Component Rendered");

  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={handleClick}>
        Click Child Button
      </button>
    </div>
  );
});

export default CallbackChild;