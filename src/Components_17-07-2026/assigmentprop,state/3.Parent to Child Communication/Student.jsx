function Student(props) {
  return (
    <div>
      <h2>Student Details</h2>

      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>

      <p>Skills:</p>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <p>Course: {props.details.course}</p>

      <hr />
    </div>
  );
}

export default Student;