function StudentCard({ student }) {

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px"
      }}
    >
      <h3>{student.name}</h3>

      <p>{student.course}</p>

    </div>
  );
}

export default StudentCard;