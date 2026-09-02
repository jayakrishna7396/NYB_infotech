const NullishCoalescing = () => {
  const studentName = null;
  const course = "React";

  const name = studentName ?? "Guest";
  const selectedCourse = course ?? "JavaScript";

  return (
    <div>
      <h2>Nullish Coalescing (??)</h2>

      <p>Name: {name}</p>
      <p>Course: {selectedCourse}</p>
    </div>
  );
};

export default NullishCoalescing;