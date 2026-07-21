function Child1(props) {

  function handleClick() {
    props.sendData("Hello Parent! This message is from the Child.");
  }

  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={handleClick}>
        Send Data to Parent
      </button>
    </div>
  );
}

export default Child1;