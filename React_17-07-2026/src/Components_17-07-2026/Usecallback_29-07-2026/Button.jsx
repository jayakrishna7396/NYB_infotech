
import { memo } from "react";

function Button({ onClick }) {
  console.log("Button component rendered");

  return (
    <div>
      <button onClick={onClick}>
        Click Me
      </button>
    </div>
  );
}

export default Button;

import React from "react";

const Button = React.memo(function Button({ onClick }) {
  console.log("Button component rendered");

  return (
    <button onClick={onClick}>
      Click Me
    </button>
  );
});

export default Button;