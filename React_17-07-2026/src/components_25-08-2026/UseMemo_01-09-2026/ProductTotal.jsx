import { useMemo, useState } from "react";

function ProductTotal() {
  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 5000 },
  ];

  const totalPrice = useMemo(() => {
    console.log("Calculating total...");

    return products.reduce(
      (total, product) => total + product.price,
      0
    );
  }, [products]);

  return (
    <div>
      <h1>useMemo Example</h1>

      <h2>Total Price: ₹{totalPrice}</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default ProductTotal;