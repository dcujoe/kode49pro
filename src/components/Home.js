import React, { useState, useEffect } from "react";
import "./compocss/Home.css";
import { Link } from "react-router-dom";
import homeimage1 from "../img/food7.jpeg";
import homevideo from "../img/farm.mp4";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

export default function Home({ price, image, id, title }) {
  const [data, setData] = useState("");
  const [basket, dispatch] = useStateValue([]);
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
        <video loop muted autoPlay playsInline className="home_video">
          <source src={homevideo} type="video/mp4" />
        </video>
        <div className="home__container container grid">
          {/*<div className="home__img-bg">
            <img src={homeimage1} alt="homeimage" className="home__img" />
          </div>*/}

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
                Just click!
              </a>

              <button className="button home__button" onClick={addToBasket}>
                ADD TO CART
              </button>
            </div>
            <h1 className="home__title">
              WELCOME TO THE FUTURE
              <br /> OF AGRICULTURE
            </h1>
            <h3 className="home__description">
              Order from Africa & Asia with a click!
            </h3>
            <button className="home__price">
              <a>Best bulk food Africa </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
