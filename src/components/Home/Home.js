import React from "react";
import Cart from "../Cart/Cart";
import useTShirts from "../hooks/useTShirts";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [tshirts, setTShirts] = useTShirts();
  return (
    <div className="wrapper">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <TShirt key={tshirt.id} tshirt={tshirt}></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
