import { useState } from "react";

function DynamicFormHandling() {
  const [users, setUsers] = useState([
    { name: "", email: "" }
  ]);

  // Add a new input field
  const addUser = () => {
    setUsers([...users, { name: "", email: "" }]);
  };

  // Update input values
  const handleChange = (index, event) => {
    const newUsers = [...users];

    newUsers[index][event.target.name] = event.target.value;

    setUsers(newUsers);
  };

  // Remove input field
  const removeUser = (index) => {
    const newUsers = users.filter((_, i) => i !== index);

    setUsers(newUsers);
  };

  // Submit form
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(users);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h1>Dynamic Form</h1>

      <form onSubmit={handleSubmit}>
        {users.map((user, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={user.name}
              onChange={(event) => handleChange(index, event)}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={(event) => handleChange(index, event)}
            />

            <button
              type="button"
              onClick={() => removeUser(index)}
            >
              Remove
            </button>

            <br /><br />
          </div>
        ))}

        <button type="button" onClick={addUser}>
          Add User
        </button>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DynamicFormHandling;