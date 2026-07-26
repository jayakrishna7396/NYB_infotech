import { useStudent } from "../context/StudentContext";

function StudentDetails() {
  const { student, updateName } = useStudent();

  return (
    <div>
      <h3>Student Details</h3>

      <p>Name: {student.name}</p>

      <p>Course: {student.course}</p>

      <p>Age: {student.age}</p>

      <button onClick={updateName}>
        Update Student Name
      </button>
    </div>
  );
}

export default StudentDetails;