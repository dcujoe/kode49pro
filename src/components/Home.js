import React, { useState, useEffect } from "react";
import "./compocss/Home.css";
import { Link } from "react-router-dom";
import Head from "./Head";
import Featured from "./Featured";
import Story from "./Story";
import Variety from "./Variety";
import Footer from "./Footer";
import homeimage from "../assets/img/food7.jpeg";

export default function Home() {
  const [data, setData] = useState("");

  return (
    <>
      <Head />
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
              <a>Food deals producers</a>
            </button>
          </div>
        </div>
      </section>
      <Featured />
      <Story />
      <Variety />
      <Footer />
    </>
  );
}
