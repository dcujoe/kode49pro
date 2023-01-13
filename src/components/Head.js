import React from "react";
import FaBarcode from "react-icons/fa/";

export default function Head() {
  return (
    <div className="heading" id="heading">
      <nav className="nav container">
        <FaBarcode />
        <div className="nav__menu" id="nav__menu">
          <ul className="nav__list">
            <li className="nav_item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#home" className="nav__link">
                Featured
              </a>
            </li>
            <li className="nav_item">
              <a href="#home" className="nav__link">
                Products
              </a>
            </li>
            <li className="nav_item">
              <a href="#home" className="nav__link">
                New Collection
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav__close">
            <i className="bx bx-x"></i>
          </div>
        </div>
        <div className="nav__btns">
          <i className="bx bx-moon change-theme" id="theme-button"></i>
          <div className="nav__shop" id="cart-shop">
            <i className="bx bx-shopping-bag"></i>
          </div>
          <div className="nav__shop" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
