import React, { useState } from "react";
import "./compocss/Head.css";
import data from "./../data.json";
import { ShoppingOutlined, SearchOutlined } from "@ant-design/icons";

export default function Head() {
  let searchData = data.icons;

  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchInput) => {
    setValue(searchInput);
    /* Create the API to get the search item */

    console.log("search ", searchInput);
  };

  /* TODO: 
   1. filter the search data using input from search item
   2. direct the search result to a new page
   3. New page displays search results in a list
   */

  return (
    <>
      <header className="header" id="header">
        <div className="roller">
          <a href="#">Order Agricultural products anytime from anywhere!</a>
        </div>
        <nav className="nav container">
          <a href="#" className="nav__logo">
            KODE 49
          </a>

          <div className="nav__btns">
            {/*change the theme of the code */}
            <i className="bx bx-moon change-theme" id="theme-button"></i>

            <div className="nav__shop" id="cart-shop">
              <a className="shopping_icon">
                <ShoppingOutlined />
              </a>
            </div>

            <div className="nav__toggle" id="nav-toggle"></div>
          </div>
          <div className="search__parent">
            <form>
              <input
                href="#"
                alt="searchbar"
                type="text"
                className="search__bar"
                onChange={onChange}
                value={value}
              />

              <SearchOutlined
                className="search__icon"
                href="#"
                onClick={() => onSearch(value)}
              />
            </form>
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
              <i className="bx bx-x"></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
