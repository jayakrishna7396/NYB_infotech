function ProductList({ products }) {
  console.log("Product List Rendered");

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price : ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;