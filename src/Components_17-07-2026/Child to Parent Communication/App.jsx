import Child from "./Child";

function Parent() {

  // Function to receive data from Child
  function receiveMessage(message) {
    alert(message);
  }

  return (
    <div>
      <h1>Parent Component</h1>

      <Child sendMessage={receiveMessage} />
    </div>
  );
}

export default Parent;