import { useState } from "react";

function Child(props) {
  const [text, setText] = useState("");

  function handleButtonClick() {
    props.sendData("Hello Parent! Button Clicked");
  }

  function handleInputSend() {
    props.sendData(text);
  }

  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={handleButtonClick}>
        Send Button Message
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter a message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleInputSend}>
        Send Input Message
      </button>
    </div>
  );
}

export default Child;