function displayStudent({ name, age, course }) {
  return `${name} is ${age} years old and studying ${course}.`;
}

function FunctionDestructuring() {
  const student = {
    name: "Ravi",
    age: 20,
    course: "React"
  };

  return (
    <div>
      <h2>5. Function Parameter Destructuring</h2>

      <p>{displayStudent(student)}</p>
    </div>
  );
}

export default FunctionDestructuring;