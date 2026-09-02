const SpreadAndRest = () => {
  // Spread
  const numbers = [10, 20, 30];

  const newNumbers = [...numbers, 40, 50];

  // Rest
  const [first, ...remaining] = newNumbers;

  return (
    <div>
      <h2>Spread and Rest Operators</h2>

      <h3>Spread Operator</h3>
      <p>Original: {numbers.join(", ")}</p>
      <p>New Array: {newNumbers.join(", ")}</p>

      <h3>Rest Operator</h3>
      <p>First: {first}</p>
      <p>Remaining: {remaining.join(", ")}</p>
    </div>
  );
};

export default SpreadAndRest;