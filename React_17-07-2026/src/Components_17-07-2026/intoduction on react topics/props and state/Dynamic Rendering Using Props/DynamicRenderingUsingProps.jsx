// Dynamic rendering means displaying different content based on the data received through props.

// Student.jsx
function Student3(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default Student3;

// App.jsx
import Student3 from "./Student";

function App() {
  return (
    <div>
      <h1>Student List</h1>

      <Student3
        name="Jaya"
        course="React"
      />

      <Student4
        name="Rahul"
        course="JavaScript"
      />

      <Student4
        name="Anjali"
        course="Python"
      />
    </div>
  );
}
export default App;
// Output:
// Student List

// Jaya
// Course: React

// Rahul
// Course: JavaScript

// Anjali
// Course: Python

// The same Student component is reused with different props.

