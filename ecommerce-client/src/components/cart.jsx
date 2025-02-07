import "../styles/cart.css";

function CartModal({ items, onClose,setCard }) {
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);


  const clearCart = () => {
    setCard([]);
  }

  const removeItem = (id) => {
    setCard((prev) => prev.filter((item) => item.id != id));
  }

  return (
    <>
    <div className="cart-overlay" onClick={onClose}>

  
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>{items.length} Items</h2>
          <button id="clear-btn" onClick={clearCart}>Clear</button>
        </div>
        <div className="cart-items">
          {items.length > 0 ? (
            items.map((item) => {
                return <>
              <div className="cart-item" key={item.id}>
                <div className="remove-btn">
                  <button onClick={() => removeItem(item.id)}>X</button>
                </div>
                <div className="cart-content">
                  <img src={item.image} alt="" />
                  <div className="cart-item-info">
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <div className="item-count"></div>
                  </div>
                </div>
              </div>
              </>
            })
          ) : (
           ""
          )}
        </div>

        <div className="cart-total">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
      </div>
      </div>
    </>
  );
}

export default CartModal;
