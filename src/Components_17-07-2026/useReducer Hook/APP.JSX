import { useReducer } from "react";

// Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return 0;

    default:
      return state;
  }
}

function App() {

  // useReducer Hook
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>useReducer Example</h1>

      <h2>Count: {count}</h2>

      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
}

export default App;