import "../styles/header.css";
import SearchBar from "./search-bar";
import Cart from "../assets/cart-svgrepo-com.svg?react";
import { useState } from "react";
import CartModal from "./cart";
function Header({card,setCard}) {

  const [cartOpen, setCartOpen] = useState(false);

  


  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  }

  return (
    <div className="header">
      <SearchBar />

      
        <Cart className="right-item" onClick={toggleCart} />

        {cartOpen && <CartModal items={card} onClose={toggleCart} setCard={setCard}/>}
    
    </div>
  );
}

export default Header;
