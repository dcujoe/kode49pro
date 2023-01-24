import "./compocss/product.css";
import React from "react";
// the useState Value ensures that this product.js file is part of the children
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  // state is the initial state, dispatch is the action that has to be done
  // The dispatch is a javascript object that performs an action
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
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>€</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐️</p>
            ))}
        </div>
      </div>
      <span className="star-space"></span>
      <img src={image} alt="product_image" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
