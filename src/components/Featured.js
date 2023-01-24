import React, { useState, useEffect } from "react";
import "./compocss/featured.css";
import homeimage from "../img/food3.jpeg";
import featured2 from "../img/food5.jpeg";
import featured3 from "../img/food1.jpeg";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

export default function Featured({ price, image, id, title }) {
  const [data, setData] = useState([]);
  const [state, dispatch] = useStateValue();
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

  const imageData = require("../data.json");

  return (
    <>
      <section className="featured section container" id="featured">
        <h2 className="section__title">Featured</h2>

        <div className="featured__container grid">
          <article className="featured__card">
            <span className="featured__tag">Sale</span>
            <img src={homeimage} alt="" className="featured__img" />

            <div className="featured__data">
              <h3 className="featured__title">Jazzmaster</h3>
              <span className="featured__price">{price}</span>
            </div>

            <button className="button featured__button" onClick={addToBasket}>
              ADD TO CART
            </button>
          </article>

          <article className="featured__card">
            <span className="featured__tag">Sale</span>

            <img src={featured2} alt="" className="featured__img" />

            <div className="featured__data">
              <h3 className="featured__title">Ingersoll</h3>
              <span className="featured__price">$250</span>
            </div>

            <button className="button featured__button" onClick={addToBasket}>
              ADD TO CART
            </button>
          </article>

          <article className="featured__card">
            <span className="featured__tag">Sale</span>

            <img src={featured3} alt="" className="featured__img" />

            <div className="featured__data">
              <h3 className="featured__title">Rose gold</h3>
              <span className="featured__price">$890</span>
            </div>

            <button className="button featured__button" onClick={addToBasket}>
              ADD TO CART
            </button>
          </article>
        </div>
      </section>
    </>
  );
}
