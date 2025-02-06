import "../styles/cart.css";

function CartModal({ items, onClose }) {
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
    <div className="cart-overlay" onClick={onClose}>

  
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>{items.length} Items</h2>
          <button>Clear</button>
        </div>
        <div className="cart-items">
          {items.length > 0 ? (
            items.map((item) => {
              <div className="cart-item" key={item.id}>
                <div className="remove-btn">
                  <button>X</button>
                </div>
                <div className="cart-content">
                  <img src={item.image} alt="" />
                  <div className="cart-item-info">
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <div className="item-count"></div>
                  </div>
                </div>
              </div>;
            })
          ) : (
            <p></p>
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
