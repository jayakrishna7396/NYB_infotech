function ListRendering() {
  const products = [
    "Laptop",
    "Mobile",
    "Tablet",
    "Headphones",
    "Keyboard"
  ];

  return (
    <div>
      <h2>Product List</h2>

      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListRendering;