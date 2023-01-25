import React from "react";
import "./compocss/subtotal.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <form
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items): <strong>€{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
      />
      <button className="sub_button">Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
