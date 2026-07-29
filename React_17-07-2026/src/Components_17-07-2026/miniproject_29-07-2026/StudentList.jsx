function StudentList({ students }) {

  console.log("Student List Rendered");

  return (
    <div className="card">

      <h2>Student List</h2>

      {
        students.map((student) => (
          <div key={student.id}>
            {student.name} - {student.marks}
          </div>
        ))
      }

    </div>
  );
}

export default StudentList;