import { useState } from "react";

function ParameterEvents() {
const [message, setMessage] = useState(
"Click a button to see the parameter"
);

function handleUser(name) {
setMessage("Hello " + name);
}

function handleAge(age) {
setMessage("Your age is " + age);
}

return ( <div className="card"> <h2>Passing Parameters</h2>


  <p>{message}</p>

  <button onClick={() => handleUser("Jaya")}>
    Say Hello
  </button>

  <button onClick={() => handleAge(25)}>
    Show Age
  </button>
</div>


);
}

export default ParameterEvents;
