import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const GiftContext = createContext("Gold Ring");

const Grandpa = () => {
  const [house, setHouse] = useState(1);
  const ornament = "Diamond Ring";
  const watch = "Gold Watch";
  const buyHouse = () => {
    const newHouse = house + 1;
    setHouse(newHouse);
  };
  return (
    <GiftContext.Provider value={watch}>
      <div className="grandpa">
        <h2>Grandpa</h2>
        <button onClick={buyHouse}>Buy A House</button>
        <p>House: {house}</p>
        <section style={{ display: "flex" }}>
          <Father house={house} ornament={ornament}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </GiftContext.Provider>
  );
};

export default Grandpa;
