const ObjectMethods = () => {

  const student = {
    name: "Jay",
    course: "React",

    greet() {
      return `Hello ${this.name}`;
    },

    getCourse() {
      return `I am learning ${this.course}`;
    }
  };

  return (
    <div>
      <h2>Object Methods</h2>

      <p>{student.greet()}</p>

      <p>{student.getCourse()}</p>
    </div>
  );
};

export default ObjectMethods;