import React from "react";

function Student15({ name, showDetails }) {
  console.log("Student Component Rendered");

  return (
    <div className="card">
      <h2>Student Details</h2>

      <p>Name : {name}</p>

      <button onClick={showDetails}>
        View Details
      </button>
    </div>
  );
}

export default React.memo(Student15);