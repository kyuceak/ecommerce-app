import { useState } from "react";
import "../styles/product-grid-view.css";
import { useNavigate } from "react-router-dom";
import StarRating from "./star-rating";
import { useParams } from "react-router-dom";
function ProductGridView({ products,card ,setCard, viewMode }) {

  const [addedProducts, setAddedProducts] = useState([]);

  const navigate = useNavigate();
  const {category} = useParams();


  const addToCard = (product) => {
    
    setCard((prev) => [...prev, product]);
  }

  const navigateProdDetails = (product) => {
    if(category){
      navigate(`/category/${category}/${product.id}`, {state: {product}});
    }else {
      navigate(`/shop/${product.id}`, {state: {product}})
    }
    
  }

  return (
    <>
      <div className={`product-grid ${viewMode === "list" ? "list-view" : "grid-view"}`}>
        {products &&
          products.map((product,index) => {

            const isAdded = card.some((item) => item.id === product.id);

            return (
              <>
                <div className="card" key={index}>
                  <img 
                  src={product.image} 
                  className="card-image" 
                  alt="" 
                  onClick={() => navigateProdDetails(product)}
                  />

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
