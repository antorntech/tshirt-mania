import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeCartItem }) => {
  // add conditional rendering
  let command;
  if (cart.length === 0) {
    command = "Please add your item!!!";
  }
  return (
    <div>
      <h3>Item Selected: {cart.length}</h3>
      {command}
      {cart.map((tshirt) => (
        <p>
          {tshirt.name}
          <button onClick={() => removeCartItem(tshirt)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
