import React, { useState, useEffect } from "react";
import "./compocss/Home.css";
import homeimage from "../assets/img/food7.jpeg";

export default function Home() {

  const [data, setData] = useState("");

  const getData = () => {
    fetch("data.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }}).then(function(response){
      let a = response.json();
      setData(a);
      console.log("response = ", a);
    })
  };
  useEffect(() => {
    getData();
  }, []);



  return (
    <>
      <section className="home" id="home">
        <div className="home__container container grid">
          <div class="home__img-bg">
            <img src={homeimage} alt="homeimage" class="home__img" />
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

              <button className="button home__button">ADD TO CART</button>
            </div>
            <h1 className="home__title">
              WELCOME TO THE FUTURE
              <br /> OF AGRICULTURE
            </h1>
            <p className="home__description">
             Buy food in large quantities from all over the world directly from farmers
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
