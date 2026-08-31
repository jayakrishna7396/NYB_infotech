function Child1(props) {

  function handleClick() {
    props.sendMessage("Hello from Child 1!");
  }

  return (
    <div>
      <h2>Child 1</h2>

      <button onClick={handleClick}>
        Send Message
      </button>
    </div>
  );
}

export default Child1;