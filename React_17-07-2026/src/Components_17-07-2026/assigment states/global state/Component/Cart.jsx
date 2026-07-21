import { useCart } from "../context/CartContext";

function Cart() {
  const { cartCount, removeFromCart } = useCart();

  return (
    <div>
      <h2>Cart</h2>

      <p>Total Items: {cartCount}</p>

      <button onClick={removeFromCart}>
        Remove from Cart
      </button>
    </div>
  );
}

export default Cart;