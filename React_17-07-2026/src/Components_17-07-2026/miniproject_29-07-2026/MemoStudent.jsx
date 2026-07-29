import React from "react";

function MemoStudent({ name, showMessage }) {

  console.log("Memo Component Rendered");

  return (
    <div className="card">
      <h2>React.memo()</h2>

      <p>{name}</p>

      <button onClick={showMessage}>
        Show Details
      </button>
    </div>
  );
}

export default React.memo(MemoStudent);