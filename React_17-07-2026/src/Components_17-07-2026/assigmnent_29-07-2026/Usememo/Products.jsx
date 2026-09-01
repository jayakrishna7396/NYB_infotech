import ProductList from "./ProductList";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 500
    },
    {
      id: 2,
      name: "Mobile",
      price: 300
    },
    {
      id: 3,
      name: "Headphones",
      price: 100
    }
  ];

  return (
    <div>
      <h1>My Products</h1>

      <ProductList products={products} />
    </div>
  );
}

export default App;