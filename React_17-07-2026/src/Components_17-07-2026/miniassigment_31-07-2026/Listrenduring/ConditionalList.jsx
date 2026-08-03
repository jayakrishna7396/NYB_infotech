function ConditionalList() {
  const students = [
    {
      id: 1,
      name: "Ravi",
      isActive: true
    },
    {
      id: 2,
      name: "Sita",
      isActive: false
    },
    {
      id: 3,
      name: "John",
      isActive: true
    }
  ];

  return (
    <div>
      <h2>4. Conditional Rendering in List</h2>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>

          {student.isActive ? (
            <p>Student is Active</p>
          ) : (
            <p>Student is Inactive</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ConditionalList;