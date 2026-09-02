import { useSearchParams } from "react-router-dom";

function Product() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const sort = searchParams.get("sort");

  return (
    <div>
      <h1>Products</h1>

      <p>Category: {category}</p>

      <p>Sort: {sort}</p>
    </div>
  );
}

export default Product;