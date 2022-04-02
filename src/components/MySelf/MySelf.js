import React from "react";
import Special from "../Special/Special";

const MySelf = ({ house, ornament }) => {
  return (
    <div>
      <h4>Me</h4>
      <p>
        <small>House: {house}</small>
        <Special ornament={ornament}></Special>
      </p>
    </div>
  );
};

export default MySelf;
