import React, { useState } from "react";
import Cart from "../Cart/Cart";
import useTShirts from "../hooks/useTShirts";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [tshirts, setTShirts] = useTShirts();

  const [cart, setCart] = useState([]);

  const addToCart = (selectedItem) => {
    const exists = cart.find((tshirt) => tshirt.id === selectedItem.id);
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("Already Item Added");
    }
  };

  const removeCartItem = (selectedItem) => {
    const rest = cart.filter((tshirt) => tshirt.id !== selectedItem.id);
    setCart(rest);
  };

  return (
    <div className="wrapper">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <TShirt
            key={tshirt.id}
            tshirt={tshirt}
            addToCart={addToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} removeCartItem={removeCartItem}></Cart>
      </div>
    </div>
  );
};

export default Home;
