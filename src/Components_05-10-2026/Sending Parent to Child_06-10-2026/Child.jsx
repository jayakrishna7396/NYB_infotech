function Child({ name, age, course }) {
  return (
    <div>
      <h2>Child Component</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default Child;