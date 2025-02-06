import "../styles/product-grid-view.css";
import useData from "../hooks/useData";

function ProductGridView() {
  const {
    data: products,
    loading,
    error,
  } = useData("https://fakestoreapi.com/products?limit=30");

  return (
    <>
      <div className="product-grid">
        {products &&
          products.map((product) => {
            return (
              <>
                <div className="card">
                  <img src={product.image} className="card-image" alt="" />

                  <div className="card-content">
                    <div className="card-title">{product.title}</div>
                    <div className="card-price">{product.price}</div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default ProductGridView;
