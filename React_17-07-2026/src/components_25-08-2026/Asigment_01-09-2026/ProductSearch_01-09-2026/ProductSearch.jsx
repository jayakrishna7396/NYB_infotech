
import { useEffect, useState } from "react";

function ProductSearch() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // API Call
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Loading
  if (loading) {
    return <h2>Loading products...</h2>;
  }

  // Error
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Search + Filter
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1>Product Search & Filter</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      {/* Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="furniture">Furniture</option>
        <option value="groceries">Groceries</option>
      </select>

      <br />
      <br />

      {/* Products */}
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>

            <p>Price: ${product.price}</p>

            <p>Category: {product.category}</p>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default ProductSearch;