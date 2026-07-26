import { useState } from "react";

function FormExample() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Form submitted!");
  };

  return (
    <div>
      <h2>5. Dynamic Form Handling</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />

        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
        </select>

        <br />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormExample;