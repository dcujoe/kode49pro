import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Head() {
  return (
    <>
      <div className="heading" id="heading">
        <nav className="nav container">
          <FontAwesomeIcon icon="fa-solid fa-cube" />
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
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-sun-bright" />
            <div className="nav__shop" id="cart-shop">
              <FontAwesomeIcon icon="fa-regular fa-basket-shopping-simple" />
            </div>
            <div className="nav__shop" id="nav-toggle">
              <i className="bx bx-grid-alt"></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
