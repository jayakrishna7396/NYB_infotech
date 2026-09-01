import React, { useRef } from 'react';

function UseRef() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>useRef Example</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
      />

      <br />
      <br />

      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  );
}

export default UseRef;