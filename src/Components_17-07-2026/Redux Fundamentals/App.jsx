import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  reset,
} from "./features/counter/counterSlice";

function App() {

  // Get state from Redux Store
  const count = useSelector(
    (state) => state.counter.value
  );

  // Send actions
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter</h1>

      <h2>{count}</h2>

      <button
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <button
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
}

export default App;