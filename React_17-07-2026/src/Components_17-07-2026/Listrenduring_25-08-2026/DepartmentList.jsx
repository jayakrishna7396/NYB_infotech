function DepartmentList() {
  const departments = [
    {
      id: 1,
      name: "Frontend",
      skills: ["HTML", "CSS", "React"]
    },
    {
      id: 2,
      name: "Backend",
      skills: ["Node.js", "Java", "Python"]
    }
  ];

  return (
    <div>
      <h2>5. Nested List Rendering</h2>

      {departments.map((department) => (
        <div key={department.id}>
          <h3>{department.name}</h3>

          <ul>
            {department.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DepartmentList;