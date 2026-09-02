const ObjectAssign = () => {
  const student = {
    name: "Jay",
    age: 25
  };

  const details = {
    course: "React"
  };

  const result = Object.assign({}, student, details);

  return (
    <div>
      <h2>Object.assign()</h2>

      <p>Name: {result.name}</p>
      <p>Age: {result.age}</p>
      <p>Course: {result.course}</p>
    </div>
  );
};

export default ObjectAssign;