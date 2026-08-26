

function ReactDemo() {
  // State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State for counter
  const [count, setCount] = useState(0);

  // List data
  const users = [
    {
      id: 1,
      name: "Rahul",
      age: 25,
      city: "Hyderabad",
    },
    {
      id: 2,
      name: "Priya",
      age: 23,
      city: "Chennai",
    },
    {
      id: 3,
      name: "Arjun",
      age: 28,
      city: "Bangalore",
    },
  ];

  return (
    <div className="container">

      <h1>React Fundamentals Demo</h1>

      {/* Conditional Rendering */}
      <h2>Conditional Rendering</h2>

      {isLoggedIn ? (
        <div>
          <h3>Welcome User!</h3>

          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h3>Please Login</h3>

          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </div>
      )}

      <hr />

      {/* State */}
      <h2>State Example</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <hr />

      {/* List Rendering */}
      <UserList users={users} />

    </div>
  );
}

export default ReactDemo;