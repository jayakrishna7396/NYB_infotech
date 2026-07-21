import Student from "./Student";

function Detail() {
  return (
    <div>
      <h1>Parent Component</h1>

      <Student
        name="Jaya Krishna"
        course="React JS"
        age={22}
      />
    </div>
  );
}

export default Detail;