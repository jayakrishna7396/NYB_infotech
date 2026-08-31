function PropsDrilling() {
  const userName = "Jayakrishna";

  return (
    <div>
      <h1>Props Drilling Example</h1>

      <Parent userName={userName} />
    </div>
  );
}

function Parent({ userName }) {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child userName={userName} />
    </div>
  );
}

function Child({ userName }) {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandChild userName={userName} />
    </div>
  );
}

function GrandChild({ userName }) {
  return (
    <div>
      <h2>GrandChild Component</h2>
      <p>Hello, {userName}!</p>
    </div>
  );
}

export default PropsDrilling;