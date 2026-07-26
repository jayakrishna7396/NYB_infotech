function MapExample() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000
    }
  ];

  return (
    <div>
      <h2>4. map() Method</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default MapExample;