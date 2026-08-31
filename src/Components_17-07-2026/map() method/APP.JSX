import "./App.css";

function App() {

  const names = ["Jaya", "Ravi", "Kiran", "Suresh"];

  return (
    <div>
      <h1>Students List</h1>

      {names.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
}

export default App;

