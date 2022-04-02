import React, { useContext } from "react";
import { GiftContext } from "../Grandpa/Grandpa";

const Special = ({ ornament }) => {
  const watch = useContext(GiftContext);
  return (
    <div>
      <h5>Special</h5>
      <p>
        <small>Gift: {ornament}</small>
      </p>
      <p>
        <small>Gift: {watch}</small>
      </p>
    </div>
  );
};

export default Special;
