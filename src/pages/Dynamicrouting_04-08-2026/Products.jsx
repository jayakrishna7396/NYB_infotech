
import ProductCard from "../components/ProductCard"

function Products() {

  const products = [];
  return (

    <div className="page">

      <h1>
        Products
      </h1>

      <div className="products">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </div>

  );

}

export default Products;