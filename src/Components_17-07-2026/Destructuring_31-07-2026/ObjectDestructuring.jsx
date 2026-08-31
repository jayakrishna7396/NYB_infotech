function ObjectDestructuring() {
  const student = {
    name: "Ravi",
    age: 20,
    course: "React"
  };

  const { name, age, course } = student;

  return (
    <div>
      <h2>Object Destructuring</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>

      <p>Name:krishna</p>
      <p>Age;25</p>
      <p>Course:python</p>

      
    </div>
  );
}

export default ObjectDestructuring;