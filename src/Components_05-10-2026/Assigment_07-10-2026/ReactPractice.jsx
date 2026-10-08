import { useEffect, useState } from "react";

function ReactPractice() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState(["Rahul", "Krishna"]);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // useEffect with dependency array
  useEffect(() => {
    console.log("useEffect executed");

    document.title = `Count: ${count}`;
  }, [count]);

  // Click Event
  const handleClick = () => {
    setMessage("Button clicked!");
  };

  // Change Event
  const handleChange = (event) => {
    setName(event.target.value);
  };

  // Submit Event
  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(`Form submitted by ${name}`);
  };

  // Keyboard Event
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setMessage("Enter key pressed!");
    }
  };

  // Add dynamic user
  const addUser = () => {
    if (name !== "") {
      setUsers([...users, name]);
      setName("");
    }
  };

  return (
    <div>
      <h2>React Practice</h2>

      {/* Controlled Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>
      </form>

      <br />

      {/* Click Event */}
      <button onClick={handleClick}>
        Click Me
      </button>

      <p>{message}</p>

      {/* useState + useEffect */}
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br /><br />

      {/* Dynamic Form */}
      <button onClick={addUser}>
        Add User
      </button>

      {/* List Rendering + Keys */}
      <h3>User List</h3>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
          </li>
        ))}
      </ul>

      {/* Conditional Rendering */}
      {users.length > 2 && (
        <p>More than two users are available.</p>
      )}
    </div>
  );
}

export default ReactPractice;