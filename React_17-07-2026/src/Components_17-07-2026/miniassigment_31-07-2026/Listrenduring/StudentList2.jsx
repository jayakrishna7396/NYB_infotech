function StudentList2() {
  const students = [
    {
      id: 101,
      name: "Ravi",
      course: "React"
    },
    {
      id: 102,
      name: "Sita",
      course: "JavaScript"
    },
    {
      id: 103,
      name: "John",
      course: "Node.js"
    }
  ];

  return (
    <div>
      <h2>2. Student List with Key</h2>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentList2;