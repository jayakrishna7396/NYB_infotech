import { useState } from "react";

function StudentForm({ addStudent }) {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const submitData = () => {

    const newStudent = {
      id: Date.now(),
      name,
      course
    };

    addStudent(newStudent);

    setName("");
    setCourse("");
  };

  return (
    <div>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button onClick={submitData}>
        Add Student
      </button>

    </div>
  );
}

export default StudentForm;