import React, { useState } from "react";
import "./compocss/Head.css";
import data from "./../data.json";
import { Link } from "react-router-dom";
import { ShoppingOutlined, SearchOutlined } from "@ant-design/icons";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

export default function Head({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

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

  const addToBasket = () => {
    // dispatch is the javascript object that indicates the action to be done
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id: id, title: title, image: image, price: price },
    });
  };

  return (
    <>
      <header className="header" id="header">
        <div className="roller">
          <a href="#">Order Agricultural products anytime from anywhere!</a>
        </div>
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-box-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"
              />
            </svg>
            <Link to="/">
              <h2 className="kode49">Kode49</h2>
            </Link>
          </a>

          <div className="nav__btns">
            {/*change the theme of the code */}
            <i className="bx bx-moon change-theme" id="theme-button"></i>
            <Link to="/Checkout" className="link_checkout">
              <div className="nav__shop" id="cart-shop">
                <a className="shopping_icon">
                  <div className="shopping_list">{basket.length}</div>
                  <ShoppingOutlined />
                </a>
              </div>
            </Link>

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
