function FruitList() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <div>
      <h2>1. Simple Array List</h2>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;