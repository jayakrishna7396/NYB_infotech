import React from "react";

function FormEvent() {
function handleSubmit(event) {
event.preventDefault();

```
alert("Form submitted successfully!");
```

}

return ( 
<div> 
    <h2>Form Event</h2>
  <form onSubmit={handleSubmit}>
    
    <input
      type="text"
      placeholder="Enter your name"
    />

    <br />
    <br />

    <button type="submit">
      Submit
    </button>
  </form>
</div>


);
}

export default FormEvent;
