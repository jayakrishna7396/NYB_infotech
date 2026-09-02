import Button from "../Components_25-08-2026/Firstcomposition_02-09-2026/Button";

const FirstClassFunctionpage = () => {

  const showMessage = () => {
    alert("Hello from First-Class Function!");
  };

  return (
    <div>
      <h1>First-Class Functions</h1>

      <Button handleClick={showMessage} />
    </div>
  );
};

export default FirstClassFunctionpage;