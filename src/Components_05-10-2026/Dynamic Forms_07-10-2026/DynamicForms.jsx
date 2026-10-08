import { useState } from "react";

function DynamicForms() {
  const [users, setUsers] = useState([
    { name: "", email: "" }
  ]);

  const handleChange = (index, event) => {
    const updatedUsers = [...users];

    updatedUsers[index][event.target.name] = event.target.value;

    setUsers(updatedUsers);
  };

  const addUser = () => {
    setUsers([
      ...users,
      { name: "", email: "" }
    ]);
  };

  const removeUser = (index) => {
    const updatedUsers = users.filter(
      (_, i) => i !== index
    );

    setUsers(updatedUsers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(users);
  };

  return (
    <div>
      <h2>Dynamic Form</h2>

      <form onSubmit={handleSubmit}>

        {users.map((user, index) => (
          <div key={index}>

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={user.name}
              onChange={(event) =>
                handleChange(index, event)
              }
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={(event) =>
                handleChange(index, event)
              }
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

export default DynamicForms;