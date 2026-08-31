function NormalChild({ name }) {
  console.log("NormalChild Rendered");

  return (
    <div>
      <h2>Normal Component</h2>
      <p>Hello {name}</p>
    </div>
  );
}

export default NormalChild;