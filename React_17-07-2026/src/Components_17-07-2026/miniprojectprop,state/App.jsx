import { useState } from "react";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {

  const [students, setStudents] = useState([
    { id: 1, name: "Krishna", course: "React" },
    { id: 2, name: "Rahul", course: "Java" }
  ]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div>
      <Header />

      <StudentForm addStudent={addStudent} />

      <StudentList students={students} />

    </div>
  );
}

export default App;