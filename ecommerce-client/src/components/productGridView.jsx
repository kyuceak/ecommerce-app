import { useState } from "react";
import "../styles/product-grid-view.css";

import StarRating from "./star-rating";
function ProductGridView({ products,card ,setCard }) {

  const [addedProducts, setAddedProducts] = useState([]);



  const addToCard = (product) => {
    
    setCard((prev) => [...prev, product]);

  
  }

  return (
    <>
      <div className="product-grid">
        {products &&
          products.map((product) => {

            const isAdded = card.some((item) => item.id === product.id);

            return (
              <>
                <div className="card">
                  <img src={product.image} className="card-image" alt="" />

                  <div className="card-content">
                   
                      <div className="card-title">{product.title}</div>
                      
                      <div className="card-info">
                    <StarRating rating={product.rating.rate} />
                    <div className="card-price">${product.price}</div>
                    <button id="add-btn" 
                    className={isAdded ? "added": ""}
                    onClick={() => addToCard(product)} disabled={isAdded}>
                      {isAdded ? <> Added <i className="fa fa-check"></i></>: "Add to cart +"}</button>
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
