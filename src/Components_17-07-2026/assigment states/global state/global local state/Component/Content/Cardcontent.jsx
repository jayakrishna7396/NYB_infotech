import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
    setCartCount(cartCount + 1);
  }

  function removeFromCart() {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartCount,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}