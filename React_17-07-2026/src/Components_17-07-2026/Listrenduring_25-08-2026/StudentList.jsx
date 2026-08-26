function StudentList() {
  const students = [
    {
      id: 1,
      name: "Ravi",
      age: 20,
      course: "React"
    },
    {
      id: 2,
      name: "Sita",
      age: 21,
      course: "JavaScript"
    },
    {
      id: 3,
      name: "John",
      age: 22,
      course: "Node.js"
    }
  ];

  return (
    <div>
      <h2>2. Student List</h2>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;