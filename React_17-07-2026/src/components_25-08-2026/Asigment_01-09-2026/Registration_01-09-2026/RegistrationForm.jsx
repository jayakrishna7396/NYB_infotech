import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    // Password validation
    if (formData.password === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    // Phone validation
    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone =
        "Phone number must be 10 digits";
    }

    // Gender validation
    if (formData.gender === "") {
      newErrors.gender = "Please select gender";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Registration successful!");

      console.log("Registration Data:", formData);
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <label>Name:</label>
        <br />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        {errors.name && <p>{errors.name}</p>}

        <br />

        {/* Email */}
        <label>Email:</label>
        <br />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        {errors.email && <p>{errors.email}</p>}

        <br />

        {/* Password */}
        <label>Password:</label>
        <br />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        {errors.password && <p>{errors.password}</p>}

        <br />

        {/* Phone */}
        <label>Phone:</label>
        <br />

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter 10 digit phone number"
        />

        {errors.phone && <p>{errors.phone}</p>}

        <br />

        {/* Gender */}
        <label>Gender:</label>
        <br />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {errors.gender && <p>{errors.gender}</p>}

        <br />
        <br />

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default RegistrationForm;