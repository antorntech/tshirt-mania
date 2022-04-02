import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./TShirt.css";

const TShirt = (props) => {
  const { addToCart } = props;
  const { name, picture, price } = props.tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: $ {price}</p>
      <button onClick={() => addToCart(props.tshirt)} className="cart-btn">
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default TShirt;
