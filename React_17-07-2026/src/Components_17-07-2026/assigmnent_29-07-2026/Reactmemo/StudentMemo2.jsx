
import React from "react";

function StudentMemo2({ name, course }) {
  console.log("StudentMemo Component Rendered");

  return (
    <div className="card">
      <h2>With React.memo()</h2>

      <p>Name : {name}</p>

      <p>Course : {course}</p>
    </div>
  );
}

export default React.memo(StudentMemo2);