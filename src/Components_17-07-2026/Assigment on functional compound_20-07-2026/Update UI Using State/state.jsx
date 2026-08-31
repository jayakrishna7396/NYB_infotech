import { useState } from "react";

function Color() {
  const [color, setColor] = useState("Red");

  return (
    <>
      <h2>{color}</h2>

      <button onClick={() => setColor("Blue")}>
        Change Color
      </button>
    </>
  );
}

export default Color;