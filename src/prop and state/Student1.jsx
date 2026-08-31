function Student1(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Course: {props.course}</h2>
    </div>
  );
}

export default Student1;



// student2 is the Parent Component.
// Student1 is the Child Component.
// Data is sent from parent to child using props.