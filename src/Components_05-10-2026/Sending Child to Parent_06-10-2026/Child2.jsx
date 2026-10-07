function Child2({ sendData }) {
  const message = "Hello from Child";

  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={() => sendData(message)}>
        Send Data to Parent
      </button>
    </div>
  );
}

export default Child2;