import { useState } from "react";

function ProductForm({ onAdd, onUpdate, editingProduct }) {
  const [name, setName] = useState(editingProduct?.name || "");
  const [price, setPrice] = useState(editingProduct?.price || "");
  const [category, setCategory] = useState(
    editingProduct?.category || ""
  );
  const [description, setDescription] = useState(
    editingProduct?.description || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      id: editingProduct ? editingProduct.id : Date.now(),
      name,
      price,
      category,
      description,
    };

    if (editingProduct) {
      onUpdate(product);
    } else {
      onAdd(product);
    }

    setName("");
    setPrice("");
    setCategory("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingProduct ? "Edit Product" : "Add Product"}</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <button type="submit">
        {editingProduct ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}

export default ProductForm;