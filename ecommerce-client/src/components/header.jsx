import "../styles/header.css";
import SearchBar from "./search-bar";
import Cart from "../assets/cart-svgrepo-com.svg?react";
import { useEffect, useRef, useState } from "react";
import CartModal from "./cart";
function Header({ card, setCard }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  };



  return (
    <>
      <div className={`header ${showHeader ? "visible" : "hidden"}`}>
        <SearchBar />

        <Cart className="right-item" onClick={toggleCart} />
      </div>

      {cartOpen && (
        <CartModal items={card} onClose={toggleCart} setCard={setCard} />
      )}
    </>
  );
}

export default Header;
