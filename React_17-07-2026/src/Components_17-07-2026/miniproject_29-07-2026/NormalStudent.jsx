function NormalStudent({ name }) {

  console.log("Normal Student Rendered");

  return (
    <div className="card">
      <h2>Normal Component</h2>
      <p>{name}</p>
    </div>
  );
}

export default NormalStudent;