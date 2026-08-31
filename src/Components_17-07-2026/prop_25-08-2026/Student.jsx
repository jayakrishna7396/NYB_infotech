function Student(props) {
  return (
    <div>
      <h2>Student Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Student;