import React from "react";
import "./compocss/Head.css";


export default function Head() {
  return (
    <>
    
      <header className="header" id="header">
      <div className="roller">
        <a href="#">Get the best ladies wear now! click here</a>
      </div>
        <nav className="nav container">
          <a href="#" class="nav__logo">
            
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
              
            </div>

            <div className="nav__toggle" id="nav-toggle">
              
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
