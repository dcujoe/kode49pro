import React from "react";
import "./compocss/Head.css";


export default function Head() {
  return (
    <>
    
      <header className="header" id="header">
      <div className="roller">
        <a href="#">Order Agricultural products anytime from anywhere!</a>
      </div>
        <nav className="nav container">
          <a href="#" class="nav__logo">
            KODE 49
          </a>

          //shopping cart to be placed here */
          <div className="nav__btns">
            <i className="bx bx-moon change-theme" id="theme-button"></i>

            <div className="nav__shop" id="cart-shop">
            <i class="fa-light fa-truck-container"></i>
            </div>

            <div className="nav__toggle" id="nav-toggle">
              
            </div>
          </div>
          
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
                <a href="#story" className="nav__link">
                  Story
                </a>
              </li>
              <li className="nav__item">
                <a href="#variety" className="nav__link">
                  Variety
                </a>
              </li>
            </ul>

            <div className="nav__close" id="nav-close">
              <i class="bx bx-x"></i>
            </div>
          </div>

        </nav>
      </header>
    </>
  );
}
