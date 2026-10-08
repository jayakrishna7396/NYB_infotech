function MapExample() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <div>
      <h2>Using map()</h2>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MapExample;