//calling function defination
// You can call JavaScript functions inside JSX using curly braces {}.

function greet() {
  return "good morning";
}

function App() {
  return (
    <>
      <h1>Calling Functions in jsx</h1>
      <h2>{greet()}</h2>
    </>
  );
}

export default App;
 

