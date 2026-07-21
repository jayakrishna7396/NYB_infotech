function Child(props) {

  function handleClick() {
    props.sendMessage("Hello Parent! I am the Child Component.");
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

export default Child;