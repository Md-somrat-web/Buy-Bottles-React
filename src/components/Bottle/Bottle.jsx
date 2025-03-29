import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handelAddToCard }) => {
  const { img, name, price, stock } = bottle;
  console.log(bottle);
  return (
    <div className="card bottle">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h2>${price}</h2>
      <h2>{stock} Reaming</h2>
      <button onClick={() => handelAddToCard(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
