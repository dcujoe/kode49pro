import React, { useState } from "react";
import SearchPage from "./SearchPage";
import "./compocss/Head.css";
import { ShoppingOutlined } from '@ant-design/icons';

export default function Head() {

 


  const [searchItem,setSearchItem] = useState("");
  



  




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

          
          <div className="nav__btns">
            {/*change the theme of the code */}
            <i className="bx bx-moon change-theme" id="theme-button"></i>

            <div className="nav__shop" id="cart-shop">
            <a><ShoppingOutlined /></a>
            </div>

            <div className="nav__toggle" id="nav-toggle">
              
            </div>
          </div>
          <div className="search__parent">
          <input href="#" alt="searchbar" className="search__bar" />
          
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
