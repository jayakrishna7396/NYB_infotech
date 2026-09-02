const ObjectKeys = () => {

  const student = {
    name: "Jay",
    age: 25,
    course: "React"
  };

  const keys = Object.keys(student);

  return (
    <div>
      <h2>Object.keys()</h2>

      {keys.map((key) => (
        <p key={key}>{key}</p>
      ))}
    </div>
  );
};

export default ObjectKeys;