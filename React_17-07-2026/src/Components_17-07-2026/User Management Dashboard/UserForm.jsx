import { useState } from "react";

function UserForm({ onAddUser }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: ""
  });


  // One handler for multiple fields
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    // Validation
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.city === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    // Send data to App
    onAddUser(formData);

    // Clear form
    setFormData({
      name: "",
      email: "",
      city: ""
    });
  };


  return (
    <div>

      <h2>Add New User</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={formData.city}
          onChange={handleChange}
        />

        <button type="submit">
          Add User
        </button>

      </form>

    </div>
  );
}

export default UserForm;