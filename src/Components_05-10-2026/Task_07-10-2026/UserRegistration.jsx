import { useEffect, useState } from "react";

function UserRegistration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState("");

  // useEffect
  useEffect(() => {
    console.log("User list updated:", users);
  }, [users]);

  // Handle input
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  // Add / Update User
  const handleSubmit = (event) => {
    event.preventDefault();

    // Form Validation
    if (!form.name || !form.email || !form.age) {
      setError("Please fill all fields.");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = form;

      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, form]);
    }

    setForm({
      name: "",
      email: "",
      age: ""
    });

    setError("");
  };

  // Edit User
  const handleEdit = (index) => {
    setForm(users[index]);
    setEditIndex(index);
  };

  // Delete User
  const handleDelete = (index) => {
    const updatedUsers = users.filter(
      (_, i) => i !== index
    );

    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={form.age}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          {editIndex !== null ? "Update User" : "Register User"}
        </button>

      </form>

      {/* Validation Message */}
      {error && <p>{error}</p>}

      <hr />

      <h2>User List</h2>

      {/* Conditional Rendering */}
      {users.length === 0 ? (
        <p>No users registered.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email} - {user.age}

              <button onClick={() => handleEdit(index)}>
                Edit
              </button>

              <button onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserRegistration;