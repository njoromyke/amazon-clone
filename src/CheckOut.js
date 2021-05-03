import React from "react";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./StateProvider";
import SubTotal from "./SubTotal";
import "./CheckOut.css";
const CheckOut = () => {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          {" "}
          <h3> { `Hello ${user?.email}` } </h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
              rating={item.rating}
            />
          ))}
        </div>{" "}
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default CheckOut;
