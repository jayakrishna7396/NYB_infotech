import Student from "./Student";

function StudentList() {
  return (
    <div>
      <h2>Student List</h2>

      <Student
        name="Jaya Krishna"
        course="React JS"
      />

      <Student
        name="krishna"
        course="Java"
      />

      <Student
        name="jk"
        course="Python"
      />
    </div>
  );
}

export default StudentList;