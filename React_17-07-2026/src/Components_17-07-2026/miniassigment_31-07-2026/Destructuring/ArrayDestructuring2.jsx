function ArrayDestructuring2() {
  const fruits = ["Apple", "Banana", "Mango"];

  const [first, second, third] = fruits;

  return (
    <div>
      <h2>2. Array Destructuring</h2>

      <p>First Fruit: {first}</p>
      <p>Second Fruit: {second}</p>
      <p>Third Fruit: {third}</p>
    </div>
  );
}

export default ArrayDestructuring2;