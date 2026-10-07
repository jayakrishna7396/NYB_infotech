function ChildOne({ sendData }) {
  return (
    <div>
      <h2>Child One</h2>

      <button onClick={() => sendData("Hello from Child One")}>
        Send Data
      </button>
    </div>
  );
}

export default ChildOne;