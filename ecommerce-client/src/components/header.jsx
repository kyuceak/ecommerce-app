import "../styles/header.css";
import SearchBar from "./search-bar";
import Cart from "../assets/cart-svgrepo-com.svg?react";
import { useState } from "react";

function Header() {

  const [card, setCard] = useState(false);


  const toggleCart = () => {
    setCard((prev) => !prev);
  }

  return (
    <div className="header">
      <SearchBar />

      
        <Cart className="right-item" onClick={toggleCart} />

        {card && 0 == 0}
    
    </div>
  );
}

export default Header;
