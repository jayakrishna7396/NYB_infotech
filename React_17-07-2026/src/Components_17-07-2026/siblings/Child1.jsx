function Child1({ setMessage }) {
  return (
    <button onClick={() => setMessage("Welcome to React")}>
      Change Message
    </button>
  );
}

export default Child1;