
function Child({ name }) {
  console.log("Child rendered");

  return (
    <div>
      <h2>Hello {name}</h2>
    </div>
  );
}

export default React.memo(Child);