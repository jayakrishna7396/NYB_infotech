import { useState } from "react";

function UseState() {
  const [name, setName] = useState("Krishna");

  return (
    <div>
      <h2>Name: {name}</h2>

      <button onClick={() => setName("Rahul")}>
        Change Name
      </button>
    </div>
  );
}

export default UseState;