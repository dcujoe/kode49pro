import React from "react";
import "./compocss/Home.css";
import homeimage from "../assets/img/feature2.png";

export default function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="home__container container grid">
          <div class="home__img-bg">
            <img src={homeimage} alt="" class="home__img" />
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
            <h1 className="home__title">
              NEW DISHES TO TRY
              <br /> FOOD COLLECTION 2023
            </h1>
            <p className="home__description">
              New dishes to try from all over the world at great prices. Try our latest best-seller meal package
            </p>
            <span className="home__price">€30</span>

            <div className="home__btns">
              <a href="#" className="button button--gray button--small">
                Discover
              </a>

              <button className="button home__button">ADD TO CART</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
