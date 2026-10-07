function ProductDetails({ product }) {
  if (!product) {
    return <p>Select a product to see details.</p>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
}

export default ProductDetails;