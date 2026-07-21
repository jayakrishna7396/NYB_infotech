import { useCart } from "../context/CartContext";

function Cart() {
  const { cartCount, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Global State Example</h2>

      <p>Items in Cart: {cartCount}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>

      <button onClick={removeFromCart}>
        Remove from Cart
      </button>
    </div>
  );
}

export default Cart;