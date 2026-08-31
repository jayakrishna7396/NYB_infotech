import { useCart } from "../context/CartContext";

function Header() {
  const { cartCount } = useCart();

  return (
    <div>
      <h2>Shopping App</h2>

      <p>Cart Items: {cartCount}</p>
    </div>
  );
}

export default Header;