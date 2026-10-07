import Child from "./Child2";

function Parent2() {
  const [message, setMessage] = useState("");

  const receiveData = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>

      <p>Message from Child: {message}</p>

      <Child sendData={receiveData} />
    </div>
  );
}

export default Parent2;