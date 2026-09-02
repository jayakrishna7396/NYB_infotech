const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <p key={product.id}>
          {product.name} -${product.price}
        </p>
      ))}
    </div>
  );
};

export default ProductList;