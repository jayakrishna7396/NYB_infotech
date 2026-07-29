function Counter20({ count, setCount }) {
  return (
    <div>
      <h2>Counter : {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default Counter20;