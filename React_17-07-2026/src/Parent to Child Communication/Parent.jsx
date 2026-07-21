import Student from "./Student";

function Parent() {
  const studentName = "Jaya Krishna";
  const course = "React JS";

  return (
    <div>
      <h1>Parent Component</h1>

      <Student
        name={studentName}
        course={course}
      />
    </div>
  );
}

export default Parent;