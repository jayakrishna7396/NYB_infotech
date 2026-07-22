import { useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const laptop = {
    id: 1,
    name: "Laptop"
  };

  const mobile = {
    id: 2,
    name: "Mobile"
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            product: laptop
          })
        }
      >
        Add Laptop
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            product: mobile
          })
        }
      >
        Add Mobile
      </button>

      <h3>Cart Items</h3>

      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>

          <button
            onClick={() =>
              dispatch({
                type: "REMOVE",
                id: item.id
              })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <br />

      <button
        onClick={() =>
          dispatch({ type: "CLEAR" })
        }
      >
        Clear Cart
      </button>
    </div>
  );
}

export default ShoppingCart;