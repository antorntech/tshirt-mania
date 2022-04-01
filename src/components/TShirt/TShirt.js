import React from "react";
import "./TShirt.css";

const TShirt = (props) => {
  const { name, picture, price } = props.tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: $ {price}</p>
      <button>
        <p>Add To Cart</p>
      </button>
    </div>
  );
};

export default TShirt;
