import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Sidebar() {
  const [isAccordionOpen, setAccordionOpen] = useState(true);

  const toggleAccordion = () => {
    setAccordionOpen((prev) => !prev);
  };

  return (
    <div className="sidebar">
      <img src={logo} alt="" />

      <div className="nav">
        <div className="main-nav">
          <ul>
            <li>
              <Link to="/home" className="custom-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="custom-link">
                Shop
              </Link>
            </li>
            <li>About</li>
          </ul>
        </div>

        <div className="categories-section">
          <h1>Categories</h1>
          {isAccordionOpen && (
            <ul className="accordion-content">
              <li>
                <Link to="category/electronics" className="custom-link">Electronics</Link>
              </li>
              <li>
                <Link to="category/jewelry" className="custom-link">Jewelry</Link>
              </li>
              <li>
                <Link to="category/men's clothing" className="custom-link">Men Clothing</Link>
              </li>
              <li>
                <Link to="category/women's clothing" className="custom-link">Women Clothing</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
