function Product({ name, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}

function ProductList() {
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
      price: 2000
    }
  ];

  return (
    <div>
      <h2>3. Product List</h2>

      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;