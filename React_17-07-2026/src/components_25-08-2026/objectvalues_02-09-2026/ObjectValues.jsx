const ObjectValues = () => {

  const student = {
    name: "Jay",
    age: 25,
    course: "React"
  };

  const values = Object.values(student);

  return (
    <div>
      <h2>Object.values()</h2>

      {values.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );
};

export default ObjectValues;