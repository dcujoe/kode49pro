import React from "react";
import "./compocss/searchpage.css";

const SearchPage = () => {
  return (
    <div>
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
              <form onSubmit={onSubmit}>
                <input
                  href="#"
                  alt="searchbar"
                  type="text"
                  className="search__bar"
                  onChange={onChange}
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
    </div>
  );
};

export default SearchPage;
