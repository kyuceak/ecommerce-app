import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isAccordionOpen, setAccordionOpen] = useState(true);

  const toggleAccordion = () => {
    setAccordionOpen((prev) => !prev);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          {" "}
          <Link to="/home" className="custom-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className="custom-link">
            Shop
          </Link>
        </li>
        <li className="accordion-header" onClick={toggleAccordion}>
          Categories {isAccordionOpen ? "▲" : "▼"}
          {isAccordionOpen && (
            <ul className="accordion-content">
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
              <li>Category 4</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
