import {
  useParams,
  Link
} from "react-router-dom";

import products
from "../data/products";


function ProductDetails() {

  const { id } = useParams();


  const product = products.find(

    (item) =>
      item.id === Number(id)

  );


  if (!product) {

    return (

      <div className="page">

        <h1>
          Product Not Found
        </h1>

        <Link to="/products">
          Back to Products
        </Link>

      </div>

    );

  }


  return (

    <div className="page">

      <h1>
        {product.name}
      </h1>

      <h3>
        Product ID: {product.id}
      </h3>

      <p>
        Category: {product.category}
      </p>

      <p>
        Price: ₹{product.price}
      </p>

      <p>
        {product.description}
      </p>

      <br />

      <Link to="/products">
        Back to Products
      </Link>

    </div>

  );

}

export default ProductDetails;