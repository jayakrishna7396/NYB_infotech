import { useState } from "react";

function UserForm() {

  // Store all form values in one state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    course: "",
    gender: "",
    skills: [],
    file: null
  });

  // Store validation errors
  const [errors, setErrors] = useState({});


  // Handle text fields, textarea, dropdown, radio
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };


  // Handle checkbox
  const handleCheckbox = (e) => {

    const { value, checked } = e.target;

    if (checked) {

      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });

    } else {

      setFormData({
        ...formData,
        skills: formData.skills.filter(
          (skill) => skill !== value
        )
      });

    }
  };


  // Handle file input
  const handleFileChange = (e) => {

    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };


  // Validate form
  const validateForm = () => {

    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select gender";
    }

    if (formData.skills.length === 0) {
      newErrors.skills = "Select at least one skill";
    }

    if (!formData.file) {
      newErrors.file = "Please upload a file";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  // Submit form
  const handleSubmit = (e) => {

    e.preventDefault();

    if (validateForm()) {

      console.log("Form Data:", formData);

      alert("Form submitted successfully!");

    }

  };


  return (
    <div className="form-container">

      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>

        {/* Text Field */}

        <label>Name</label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        {errors.name && (
          <p className="error">{errors.name}</p>
        )}


        {/* Email Text Field */}

        <label>Email</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        {errors.email && (
          <p className="error">{errors.email}</p>
        )}


        {/* Text Area */}

        <label>Message</label>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
        />

        {errors.message && (
          <p className="error">{errors.message}</p>
        )}


        {/* Dropdown */}

        <label>Select Course</label>

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">
            Select Course
          </option>

          <option value="React">
            React
          </option>

          <option value="JavaScript">
            JavaScript
          </option>

          <option value="Python">
            Python
          </option>
        </select>

        {errors.course && (
          <p className="error">{errors.course}</p>
        )}


        {/* Radio Buttons */}

        <label>Gender</label>

        <div>

          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>

        </div>

        {errors.gender && (
          <p className="error">{errors.gender}</p>
        )}


        {/* Checkboxes */}

        <label>Skills</label>

        <div>

          <label>
            <input
              type="checkbox"
              value="HTML"
              checked={formData.skills.includes("HTML")}
              onChange={handleCheckbox}
            />
            HTML
          </label>

          <label>
            <input
              type="checkbox"
              value="CSS"
              checked={formData.skills.includes("CSS")}
              onChange={handleCheckbox}
            />
            CSS
          </label>

          <label>
            <input
              type="checkbox"
              value="React"
              checked={formData.skills.includes("React")}
              onChange={handleCheckbox}
            />
            React
          </label>

        </div>

        {errors.skills && (
          <p className="error">{errors.skills}</p>
        )}


        {/* File Input */}

        <label>Upload File</label>

        <input
          type="file"
          onChange={handleFileChange}
        />

        {errors.file && (
          <p className="error">{errors.file}</p>
        )}


        {/* Submit Button */}

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default UserForm;