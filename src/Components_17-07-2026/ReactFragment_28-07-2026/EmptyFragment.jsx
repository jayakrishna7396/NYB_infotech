function EmptyFragment() {
  return (
    <>
      <h1>Student Registration Form</h1>

      <form>
        <label>Student Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
        />

        <br />
        <br />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
        />

        <br />
        <br />

        <label>Age:</label>
        <input
          type="number"
          placeholder="Enter your age"
        />

        <br />
        <br />

        <label>Gender:</label>
        <input type="radio" name="gender" /> Male
        <input type="radio" name="gender" /> Female

        <br />
        <br />

        <label>Course:</label>
        <select>
          <option>Select Course</option>
          <option>React JS</option>
          <option>Java</option>
          <option>Python</option>
        </select>

        <br />
        <br />

        <label>Address:</label>
        <textarea placeholder="Enter your address"></textarea>

        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default EmptyFragment;