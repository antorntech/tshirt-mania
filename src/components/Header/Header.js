import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>Welcome to Tshirt Mania</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/orderreview">O.Review</Link>
        <Link to="/grandpa">GrandPa</Link>
      </nav>
    </div>
  );
};

export default Header;
