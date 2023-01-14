import React from "react";
import "./Head.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" class="nav__logo">
            <FontAwesomeIcon icon="fa-solid fa-meteor" />
            KODE 49
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#featured" className="nav__link">
                  Featured
                </a>
              </li>
              <li className="nav__item">
                <a href="#products" className="nav__link">
                  Products
                </a>
              </li>
              <li className="nav__item">
                <a href="#new" className="nav__link">
                  New
                </a>
              </li>
            </ul>

            <div className="nav__close" id="nav-close">
              <i class="bx bx-x"></i>
            </div>
          </div>

          <div className="nav__btns">
            <i className="bx bx-moon change-theme" id="theme-button"></i>

            <div className="nav__shop" id="cart-shop">
              <i className="bx bx-shopping-bag"></i>
            </div>

            <div className="nav__toggle" id="nav-toggle">
              <i className="bx bx-grid-alt"></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
