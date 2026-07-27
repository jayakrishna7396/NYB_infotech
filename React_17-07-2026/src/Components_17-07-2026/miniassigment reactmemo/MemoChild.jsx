import React from "react";

function MemoChild({ name }) {
  console.log("MemoChild Rendered");

  return (
    <div>
      <h2>Memoized Component</h2>
      <p>Hello {name}</p>
    </div>
  );
}

export default React.memo(MemoChild);