function Student1({ name }) {
  console.log("Student Component Rendered");

  return (
    <div>
      <h2>Student Name: {name}</h2>
    </div>
  );
}

export default Student1;