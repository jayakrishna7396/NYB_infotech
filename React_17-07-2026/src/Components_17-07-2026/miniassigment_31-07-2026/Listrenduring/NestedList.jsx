function NestedList() {
  const departments = [
    {
      id: 1,
      name: "Frontend",
      skills: [
        { id: 101, name: "HTML" },
        { id: 102, name: "CSS" },
        { id: 103, name: "React" }
      ]
    },
    {
      id: 2,
      name: "Backend",
      skills: [
        { id: 201, name: "Node.js" },
        { id: 202, name: "Java" },
        { id: 203, name: "Python" }
      ]
    }
  ];

  return (
    <div>
      <h2>3. Nested List Rendering</h2>

      {departments.map((department) => (
        <div key={department.id}>
          <h3>{department.name}</h3>

          <ul>
            {department.skills.map((skill) => (
              <li key={skill.id}>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NestedList;