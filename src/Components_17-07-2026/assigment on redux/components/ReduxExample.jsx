import {
  useSelector,
  useDispatch
} from "react-redux";

import {
  increment,
  decrement
} from "../redux/counterSlice";

function ReduxExample() {

  const count = useSelector(
    (state) => state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Toolkit Example</h2>

      <h3>Count: {count}</h3>

      <button
        onClick={() => dispatch(increment())}
      >
        +
      </button>

      <button
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
}

export default ReduxExample;