import React from "react";

function InputEvent() {
function handleChange(event) {
console.log(event.target.value);
}

return ( 
<div> 
    <h2>Input Event</h2>

  <input
    type="text"
    placeholder="Enter your name"
    onChange={handleChange}/>
  
</div>


);
}

export default InputEvent;
