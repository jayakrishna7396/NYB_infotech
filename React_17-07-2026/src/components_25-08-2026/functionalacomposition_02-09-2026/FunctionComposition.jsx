const FunctionComposition = () => {

  const double = (number) => {
    return number * 2;
  };

  const addFive = (number) => {
    return number + 5;
  };

  const result = addFive(double(10));

  return (
    <div>
      <h2>Function Composition</h2>

      <p>Result: {result}</p>
    </div>
  );
};

export default FunctionComposition;