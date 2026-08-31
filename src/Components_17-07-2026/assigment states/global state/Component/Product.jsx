import { useCart } from "../context/CartContext";

function Product() {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Product</h2>

      <p>Laptop</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;