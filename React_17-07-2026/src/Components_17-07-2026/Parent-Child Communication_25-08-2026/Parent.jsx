import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("Hello from Parent");

  function handleMessage() {
    setMessage("Child sent a message!");
  }

  return (
    <div>
      <h1>Parent Component</h1>

      <h2>{message}</h2>

      <Child
        message="Hello Child"
        sendMessage={handleMessage}
      />
    </div>
  );
}

export default Parent;