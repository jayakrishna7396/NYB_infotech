import Child from "./Child";

function Parent() {
  const studentName = "Krishna";
  const studentAge = 25;
  const studentCourse = "React JS";

  return (
    <div>
      <h1>Parent Component</h1>

      <Child
        name={studentName}
        age={studentAge}
        course={studentCourse}
      />
    </div>
  );
}

export default Parent;