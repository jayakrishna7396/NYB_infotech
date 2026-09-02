const WithData = (Component) => {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 }
  ];

  return () => {
    return <Component products={products} />;
  };
};

export default WithData;