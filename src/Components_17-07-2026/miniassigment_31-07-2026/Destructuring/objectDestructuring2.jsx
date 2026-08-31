function ObjectDestructuring2() {
  const student = {
    name: "Ravi",
    age: 20,
    course: "React"
  };

  const { name, age, course } = student;

  return (
    <div>
      <h2>1. Object Destructuring</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default ObjectDestructuring2;