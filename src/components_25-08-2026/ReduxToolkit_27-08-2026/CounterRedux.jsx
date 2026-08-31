import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  reset,
} from "./counterSlice";

const CounterRedux = () => {
  const count = useSelector(
    (state) => state.counter.count
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};

export default CounterRedux;