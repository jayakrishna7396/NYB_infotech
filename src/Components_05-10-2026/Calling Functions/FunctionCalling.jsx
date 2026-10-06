function FunctionCalling() {
  function getName() {
    return "Krishna";
  }

  return (
    <div>
      <h2>Hello {getName()}</h2>
    </div>
  );
}

export default FunctionCalling;