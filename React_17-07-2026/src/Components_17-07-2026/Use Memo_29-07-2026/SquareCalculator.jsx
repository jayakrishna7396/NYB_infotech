
import { useMemo, useState } from "react";

function SquareCalculator() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  // useMemo remembers the calculated value
  const square = useMemo(() => {
    console.log("Calculating square...");

    return number * number;
  }, [number]);

  return (
    <div>
      <h1>useMemo Example</h1>

      <h2>Number: {number}</h2>

      <h2>Square: {square}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <br />
      <br />

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default SquareCalculator;

