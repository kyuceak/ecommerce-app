import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ShopIcon from "../assets/shopBag.svg?react";
import HomeIcon from "../assets/homeIcon.svg?react";
import MenSuit from "../assets/men-suit.svg?react";
import Dress from "../assets/dress.svg?react";
import Jewelry from "../assets/jewelry.svg?react";
import Devices from "../assets/devices.svg?react";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logo} alt="" />

      <div className="nav">
        <div className="main-nav">
          <ul>
            <li>
              <Link to="/home" className="custom-link">
                <HomeIcon className="icon-sidebar" /> Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="custom-link">
                <ShopIcon className="icon-sidebar" /> Shop
              </Link>
            </li>
          </ul>
        </div>

        <div className="categories-section">
          <h1>Categories</h1>

          <ul className="accordion-content">
            <li>
              <Link to="category/electronics" className="custom-link">
                <Devices className="icon-sidebar" /> Electronics
              </Link>
            </li>
            <li>
              <Link to="category/jewelry" className="custom-link">
                <Jewelry className="icon-sidebar" /> Jewelry
              </Link>
            </li>
            <li>
              <Link to="category/men's clothing" className="custom-link">
                <MenSuit className="icon-sidebar" /> Men Clothing
              </Link>
            </li>
            <li>
              <Link to="category/women's clothing" className="custom-link">
                <Dress className="icon-sidebar" />
                Women Clothing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
