import { useState } from "react";
import ProductForm from "../../Components_05-10-2026/Task_06-10-2026/ProductForm";
import ProductList from "../../Components_05-10-2026/Task_06-10-2026/ProductList";
import ProductDetails from "../../Components_05-10-2026/Task_06-10-2026/ProductDetails";


function ProductManagementPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      category: "Electronics",
      description: "A powerful laptop",
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000,
      category: "Electronics",
      description: "A modern smartphone",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );

    setEditingProduct(null);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));

    if (selectedProduct?.id === id) {
      setSelectedProduct(null);
    }
  };

  const editProduct = (product) => {
    setEditingProduct(product);
  };

  return (
    <div>
      <h1>Product Management</h1>

      <ProductForm
        onAdd={addProduct}
        onUpdate={updateProduct}
        editingProduct={editingProduct}
      />

      <hr />

      <ProductList
        products={products}
        onSelect={setSelectedProduct}
        onEdit={editProduct}
        onDelete={deleteProduct}
      />

      <hr />

      <ProductDetails product={selectedProduct} />
    </div>
  );
}

export default ProductManagementPage;