function ArrayDestructuring() {
  const fruits = ["Apple", "Banana", "Mango","Pineapple","watermelon"];

  const [first, second, third] = fruits;

  return (
    <div>
      <h2>Array Destructuring</h2>

      <p>First Fruit: {first}</p>
      <p>Second Fruit: {second}</p>
      <p>Third Fruit: {third}</p>
      <p>Four Fruit:{four}</p>
      <p>Five Fruits:{five}</p>
    </div>
  );
}

export default ArrayDestructuring;