import { useCart } from "../context/CartContext";

function Header() {
  const { cartCount } = useCart();

  return (
    <header>
      <h2>My Shopping App</h2>

      <p>Cart Items: {cartCount}</p>
    </header>
  );
}

export default Header;