import React from "react";

function StudentMemo1({ name }) {
  console.log("StudentMemo Component Rendered");

  return (
    <div>
      <h2>Student Name: {name}</h2>
    </div>
  );
}

export default React.memo(StudentMemo1);