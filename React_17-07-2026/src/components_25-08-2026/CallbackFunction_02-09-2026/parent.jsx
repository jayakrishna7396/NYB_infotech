import Child from "";

const Parent = () => {

  const handleMessage = () => {
    alert("Hello from Parent!");
  };

  return (
    <div>
      <h1>Parent Component</h1>

      <Child onMessage={handleMessage} />
    </div>
  );
};

export default Parent;