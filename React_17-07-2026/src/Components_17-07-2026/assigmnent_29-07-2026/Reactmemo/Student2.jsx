function Student2({ name, course }) {
  console.log("Student Component Rendered");

  return (
    <div className="card">
      <h2>Without React.memo()</h2>

      <p>Name : {name}</p>

      <p>Course : {course}</p>
    </div>
  );
}

export default Student2;