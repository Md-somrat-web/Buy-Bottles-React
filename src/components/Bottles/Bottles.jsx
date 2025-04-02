import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottlesPromised }) => {
  const [card, setCard] = useState([]);
  const bottles = use(bottlesPromised);
  const handelAddToCard = (bottle) => {
    // console.log("bottles will be card", bottle);
    const newCard = [...card, bottle];
    setCard(newCard);
  };
  //   console.log(bottles);
  return (
    <div>
      <h3>Bottles : {bottles.length}</h3>
      <p>Added to card : {card.length}</p>
      {/* <Card card={card}></Card> */}

      <div className="bottles-container ">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handelAddToCard={handelAddToCard}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
