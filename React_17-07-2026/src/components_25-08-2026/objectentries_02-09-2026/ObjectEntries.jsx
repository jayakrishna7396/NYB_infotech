const ObjectEntries = () => {

  const student = {
    name: "Jay",
    age: 25,
    course: "React"
  };

  const entries = Object.entries(student);

  return (
    <div>
      <h2>Object.entries()</h2>

      {entries.map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
    </div>
  );
};

export default ObjectEntries;