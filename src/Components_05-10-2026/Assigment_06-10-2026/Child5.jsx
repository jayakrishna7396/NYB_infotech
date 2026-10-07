function Child5({ name, age, isStudent, onMessage }) {
  return (
    <div>
      <h3>Child Component</h3>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>

      <button onClick={() => onMessage("Hello from Child!")}>
        Send Message to Parent
      </button>
    </div>
  );
}

export default Child5;