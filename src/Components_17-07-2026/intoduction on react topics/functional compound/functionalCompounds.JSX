// Functional Components

// A Functional Component is a JavaScript function that returns JSX.

function functionalcomponents() {
  return <h1>Welcome to React</h1>;
}

function App() {
  return (
    <div>
      <Welcome />
      <p>This is my React application.</p>
    </div>
  );
}

export default FunctionCompound;



// Welcome → Functional Component
// App → Functional Component
// <Welcome /> → Using the component
// Output:
// Welcome to React
// This is my React application.
