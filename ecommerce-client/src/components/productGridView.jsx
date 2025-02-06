import "../styles/product-grid-view.css";

import StarRating from "./star-rating";
function ProductGridView({ products }) {
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
                      
                      <div className="card-info">
                    <StarRating rating={product.rating.rate} />
                    <div className="card-price">${product.price}</div>
                    <button id="add-btn">Add to cart +</button>
                   </div>
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
