import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./compocss/Home.css";
import homeimage from "../assets/img/food7.jpeg";

export default function Home() {
  const [data, setData] = useState("");

  return (
    <>
      <section className="home" id="home">
        <div className="home__container container grid">
          <div className="home__img-bg">
            <img src={homeimage} alt="homeimage" className="home__img" />
          </div>

          <div className="home__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="home__social-link"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="home__social-link"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="home__social-link"
            >
              Instagram
            </a>
          </div>

          <div className="home__data">
            <div className="home__btns">
              <a href="#" className="button button--gray button--small">
                Discover
              </a>
              <Link to="/checkout">
                <button className="button home__button">ADD TO CART</button>
              </Link>
            </div>
            <h1 className="home__title">
              WELCOME TO THE FUTURE
              <br /> OF AGRICULTURE
            </h1>
            <p className="home__description">
              Get food from farmers in Africa, Asia & South America from comfort
              of your home.
            </p>
            <button className="home__price">
              <a>Best deals for European producers</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
