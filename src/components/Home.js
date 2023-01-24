import React, { useState, useEffect } from "react";
import "./compocss/Home.css";
import { Link } from "react-router-dom";
import homeimage from "../assets/img/food7.jpeg";
import { getBasketTotal } from "./reducer";

export default function Home({ price, image, id, title }) {
  const [data, setData] = useState("");
  const [basket, dispatch] = useState([]);
  const addToBasket = () => {
    // dispatch is the javascript object that indicates the action to be done
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <>
      <section className="home" id="home">
        <div className="home__container container grid">
          <div className="home__img-bg">
            <img src={homeimage} alt="homeimage" className="home__img" />
          </div>

          <div className="home__social">
            <Link to="https://www.facebook.com/">
              <a target="_blank" className="home__social-link">
                Facebook
              </a>
            </Link>
            <Link to="https://twitter.com">
              <a target="_blank" className="home__social-link">
                Twitter
              </a>
            </Link>
            <Link to="https://www.instagram.com">
              <a target="_blank" className="home__social-link">
                Instagram
              </a>
            </Link>
          </div>

          <div className="home__data">
            <div className="home__btns">
              <a href="#" className="button button--gray button--small">
                Discover
              </a>

              <button className="button home__button" onClick={addToBasket}>
                ADD TO CART
              </button>
            </div>
            <h1 className="home__title">
              WELCOME TO THE FUTURE
              <br /> OF AGRICULTURE
            </h1>
            <p className="home__description">
              Get bulk food from farmers in Africa and Asia from comfort of your
              home.
            </p>
            <button className="home__price">
              <a>Best food deals</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
