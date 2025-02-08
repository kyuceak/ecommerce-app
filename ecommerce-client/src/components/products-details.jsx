import { useState } from "react";
import Quantity from "./quantity";

function ProductDetails({ product, card, setCard }) {
  const [quantity, setQuantity] = useState(1);



  const handleInputChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
  };

  const handleMinus = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  const handlePlus = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const handleAddCart = () => {
    setCard([...card, { ...product, count: quantity }]);
  };

  const isAdded = card.some((item) => item.id === product.id);
  return (
    <>
      <div className="product-detail">
        <img src={product.image} alt="" className="product-image" />
        <div className="product-detail-content">
          <h2 className="detail-card-title">{product.title}</h2>
          <div className="detail-card-price">${product.price}</div>
          <div className="order">
            <div className="item-count-details">
              <button onClick={handleMinus}>
                <i className="fas fa-minus"></i>
              </button>
              <input
                type="number"
                value={quantity}
                onChange={handleInputChange}
              />
              <button onClick={handlePlus}>
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <button
              id="detail-add-btn"
              onClick={handleAddCart}
              className={isAdded ? "added" : ""}
              disabled={isAdded}
            >
              {isAdded ? (
                <>
                  Added <i className="fa fa-check"></i>
                </>
              ) : (
                "Add To Cart"
              )}
            </button>
          </div>

          <h3>Description</h3>
          <p className="card-desc">{product.description}</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
