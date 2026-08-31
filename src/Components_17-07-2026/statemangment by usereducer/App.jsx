import { useReducer } from "react";

// 1. Reducer Function
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
  // 2. useReducer
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Count: {count}</h1>

      {/* 3. Dispatch Actions */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}

export default App;


// What is State Management using useReducer?
// useReducer helps us manage state changes in one place using a reducer function and actions.

// how its works
// Click Increment
// ↓
// dispatch({ type: "INCREMENT" })
// ↓
// reducer()
// ↓
// count + 1
// ↓
// Screen updates