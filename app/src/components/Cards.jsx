import "./cards.css";
import React from "react";
import { PopUp } from "./Popup";

const Cards = ({ phone }) => {
  return (
    <>
      <div className="cardContainer" id={phone.Nombre}>
        <h2>{phone.Nombre}</h2>
        <img src={phone.Imagen} />
        <PopUp item={phone} />
      </div>
    </>
  );
};
export default Cards;
