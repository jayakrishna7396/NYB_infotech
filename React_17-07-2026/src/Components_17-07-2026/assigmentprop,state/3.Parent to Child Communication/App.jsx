import Student from "./Student";

function App() {
  const student1 = {
    name: "Jaya Krishna",
    age: 22,
    course: "React JS",
    skills: ["HTML", "CSS", "JavaScript"]
  };

  const student2 = {
    name: "Rahul",
    age: 21,
    course: "Python",
    skills: ["Python", "Django", "SQL"]
  };

  return (
    <div>
      <h1>Props Example</h1>

      <Student
        name={student1.name}
        age={student1.age}
        skills={student1.skills}
        details={student1}
      />

      <Student
        name={student2.name}
        age={student2.age}
        skills={student2.skills}
        details={student2}
      />
    </div>
  );
}

export default App;