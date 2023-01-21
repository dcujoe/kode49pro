import React, { useState } from "react";
import "./compocss/Head.css";
import { ShoppingOutlined } from '@ant-design/icons';

export default function Head() {

let searchData = require('./../data.json');

 
const [searchItem,setSearchItem] = useState(searchData);
  

const onChange = (e) => {
if (e.target.value === "") {
  setSearchItem(searchData);
} else {
  setSearchItem(e.target.value);
}

const data = searchData.filter((d) => d.toLowerCase().indexOf(
  e.target.value.toLowerCase()) !== -1);

  setSearchItem(data);
}


  





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
            <a clasName="shopping_icon"><ShoppingOutlined /></a>
            </div>

            <div className="nav__toggle" id="nav-toggle">
              
            </div>
          </div>
          <div className="search__parent">
          <input href="#" alt="searchbar" 
          type="text"
          onChange={onChange}
          className="search__bar"
          list="browsers" name="browser" id="browser" />
          <datalist id="browsers">
            <option value="Chrome"/>
            <option value="Firefox"/>
            <option value="Opera"/>
            <option value="Safari"/>
            <option value="Edge"/>
          </datalist>
          
          
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
