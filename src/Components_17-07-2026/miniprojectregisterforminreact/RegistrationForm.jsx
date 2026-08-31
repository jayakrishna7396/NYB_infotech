import { useState } from "react";

function RegistrationForm() {

  // Form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    course: "",
    skills: []
  });

  // Error messages
  const [errors, setErrors] = useState({});


  // Handle text, email, password, age,
  // gender and dropdown
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  // Handle checkboxes
  const handleSkills = (e) => {

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


  // Validate form
  const validateForm = () => {

    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (formData.password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters";
    }

    if (formData.age === "") {
      newErrors.age = "Age is required";
    }

    if (formData.gender === "") {
      newErrors.gender = "Please select gender";
    }

    if (formData.course === "") {
      newErrors.course = "Please select a course";
    }

    if (formData.skills.length === 0) {
      newErrors.skills =
        "Please select at least one skill";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  // Submit form
  const handleSubmit = (e) => {

    e.preventDefault();

    if (validateForm()) {

      console.log("Registration Data:", formData);

      alert("Registration successful!");

      // Clear form
      setFormData({
        name: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        course: "",
        skills: []
      });

      setErrors({});
    }

  };


  return (
    <div className="form-container">

      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>

        {/* Name */}

        <label>Name</label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        {errors.name && (
          <p className="error">
            {errors.name}
          </p>
        )}


        {/* Email */}

        <label>Email</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        {errors.email && (
          <p className="error">
            {errors.email}
          </p>
        )}


        {/* Password */}

        <label>Password</label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        {errors.password && (
          <p className="error">
            {errors.password}
          </p>
        )}


        {/* Age */}

        <label>Age</label>

        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />

        {errors.age && (
          <p className="error">
            {errors.age}
          </p>
        )}


        {/* Gender */}

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
          <p className="error">
            {errors.gender}
          </p>
        )}


        {/* Course */}

        <label>Course</label>

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
          <p className="error">
            {errors.course}
          </p>
        )}


        {/* Skills */}

        <label>Skills</label>

        <div>

          <label>
            <input
              type="checkbox"
              value="HTML"
              checked={formData.skills.includes("HTML")}
              onChange={handleSkills}
            />
            HTML
          </label>

          <label>
            <input
              type="checkbox"
              value="CSS"
              checked={formData.skills.includes("CSS")}
              onChange={handleSkills}
            />
            CSS
          </label>

          <label>
            <input
              type="checkbox"
              value="React"
              checked={formData.skills.includes("React")}
              onChange={handleSkills}
            />
            React
          </label>

        </div>

        {errors.skills && (
          <p className="error">
            {errors.skills}
          </p>
        )}


        {/* Submit */}

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default RegistrationForm;