function ProductList({ products, onSelect, onEdit, onDelete }) {
  return (
    <div>
      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>

            <button onClick={() => onSelect(product)}>
              View Details
            </button>

            <button onClick={() => onEdit(product)}>
              Edit
            </button>

            <button onClick={() => onDelete(product.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;