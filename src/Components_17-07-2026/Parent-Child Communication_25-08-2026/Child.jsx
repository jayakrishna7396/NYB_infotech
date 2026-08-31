function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>

      <p>{props.message}</p>

      <button onClick={props.sendMessage}>
        Send Message to Parent
      </button>
    </div>
  );
}

export default Child;