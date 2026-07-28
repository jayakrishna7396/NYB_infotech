import useCounter from "../hooks/useCounter";

function Counter() {
  const {
    count,
    increment,
    decrement,
    reset
  } = useCounter();

  return (
    <>
      <h2>Counter App</h2>

      <h3>Count: {count}</h3>

      <button onClick={increment}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </>
  );
}

export default Counter;