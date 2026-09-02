const ObjectDestructuring = () => {

  const student = {
    name: "Jay",
    age: 25,
    course: "React"
  };

  const { name, age, course } = student;

  return (
    <div>
      <h2>Object Destructuring</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
};

export default ObjectDestructuring;