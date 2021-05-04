import React from "react";
import "./Order.css";
import moment from "moment";
const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")} </p>
    
    <small className="order__id" > {order.id} </small>
    
    
    </div>
  );
};

export default Order;
