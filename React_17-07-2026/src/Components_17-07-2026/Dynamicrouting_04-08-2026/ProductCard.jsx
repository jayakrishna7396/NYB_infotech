import products from "../../data/products";

function ProductCard({ product }) {

  return (

    <div className="product-card">

      <h2>
        {product.name}
      </h2>

      <p>
        Category: {product.category}
      </p>

      <p>
        Price: ₹{product.price}
      </p>

      <Link
        to={`/products/${product.id}`}
      >
        View Product
      </Link>

    </div>

  );

}

export default ProductCard;