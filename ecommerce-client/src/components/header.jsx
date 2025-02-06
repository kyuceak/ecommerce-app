import "../styles/header.css";
import SearchBar from "./search-bar";
import Cart from "../assets/cart-svgrepo-com.svg?react";
import { useState } from "react";
import CartModal from "./cart";
function Header() {

  const [cartOpen, setCartOpen] = useState(false);

  const dummyCartItems = [
    {
      id: 1,
      title: "Product 1",
      price: 29.99,
      quantity: 2,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      title: "Product 2",
      price: 49.99,
      quantity: 1,
      image: "https://via.placeholder.com/50",
    },
  ];


  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  }

  return (
    <div className="header">
      <SearchBar />

      
        <Cart className="right-item" onClick={toggleCart} />

        {cartOpen && <CartModal items={dummyCartItems} onClose={toggleCart}/>}
    
    </div>
  );
}

export default Header;
