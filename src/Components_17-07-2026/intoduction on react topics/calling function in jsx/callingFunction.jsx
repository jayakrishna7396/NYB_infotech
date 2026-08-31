

function getMessage() {
  return "Welcome to React!";
}

function CallingFunction() {
  return (
    <div>
      <h1>{getMessage()}</h1>
    </div>
  );
}

export default CallingFunction;
Output:
// Welcome to React!

// Another example:

function addNumbers() {
  return 10 + 20;
}

function App() {
  return (
    <div>
      <h1>Result: {addNumbers()}</h1>
    </div>
  );
}

export default App;
// Output:
// Result: 30