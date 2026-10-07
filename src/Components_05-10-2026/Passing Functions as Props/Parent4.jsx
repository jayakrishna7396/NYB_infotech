import Child4 from "./Child4";

function Parent4() {
  const showMessage = () => {
    alert("Function called from Child!");
  };

  return (
    <div>
      <h1>Parent Component</h1>

      <Child handleClick={showMessage} />
    </div>
  );
}

export default Parent4;