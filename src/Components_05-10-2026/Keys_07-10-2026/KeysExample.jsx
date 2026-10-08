function KeysExample() {
  const students = [
    { id: 101, name: "Rahul" },
    { id: 102, name: "Krishna" },
    { id: 103, name: "Prudhvi" },
    { id: 104, name: "Arun" }
  ];

  return (
    <div>
      <h2>Students List</h2>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KeysExample;