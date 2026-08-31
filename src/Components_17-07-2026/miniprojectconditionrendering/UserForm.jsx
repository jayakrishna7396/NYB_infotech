import { useState } from "react";

function UserForm({ onAddUser }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: ""
  });

  const [errors, setErrors] = useState({});


  // Dynamic input handler

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  // Form validation

  const validateForm = () => {

    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (formData.city.trim() === "") {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  // Submit form

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Send data to parent
    onAddUser(formData);

    // Clear form

    setFormData({
      name: "",
      email: "",
      city: ""
    });

    setErrors({});
  };


  return (
    <div className="form-container">

      <h2>Add New User</h2>

      <form onSubmit={handleSubmit}>

        {/* Name */}

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />

        {errors.name && (
          <p className="error">
            {errors.name}
          </p>
        )}


        {/* Email */}

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        {errors.email && (
          <p className="error">
            {errors.email}
          </p>
        )}


        {/* City */}

        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={formData.city}
          onChange={handleChange}
        />

        {errors.city && (
          <p className="error">
            {errors.city}
          </p>
        )}


        <button type="submit">
          Add User
        </button>

      </form>

    </div>
  );
}

export default UserForm;