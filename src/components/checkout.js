import React from "react";
import Head from "./Head";
import { useStateValue } from "./StateProvider";

export default function checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <Head />
      <div className="checkout">
        <div className="checkout-left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1_CB423492668_.jpg"
            alt="checkout image"
            className="checkout-add"
          />
          <h2 className="checkout-title">Your Shopping Basket</h2>
        </div>
        <div className="checkout-right"></div>
      </div>
    </div>
  );
}
