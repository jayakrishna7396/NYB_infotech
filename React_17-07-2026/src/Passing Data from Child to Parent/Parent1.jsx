import Child from "./Child1";

function Parent1() {

  function receiveData(message) {
    alert(message);
  }

  return (
    <div>
      <h1>Parent Component</h1>

      <Child1 sendData={receiveData} />
    </div>
  );
}

export default Parent1;