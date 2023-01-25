import React from "react";
import "./compocss/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

const Subtotal = () => {
  {
    /*gets the basket into the data layer*/
  }
  const [{ basket }, dispatch] = useStateValue();

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="subtotal">
      {priceSplitter(
        renderText={(value) => (
          
            <p>
              Subtotal({basket.length} items): <strong>€{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
      )}
      <button className="sub_button">Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
