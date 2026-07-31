import React from "react";

function ButtonEvent() {
// Event Handler Function
function handleClick() {
alert("Button was clicked!");
}

return ( 
<div>
     <h2>Button Event</h2>
  <button onClick={handleClick}>
    Click Me
  </button>
</div>


);
}

export default ButtonEvent;
