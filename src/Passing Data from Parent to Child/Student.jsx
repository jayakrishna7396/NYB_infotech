function Student(props) {
  return (
    <div>
      <h2>Child Component</h2>

      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Student;