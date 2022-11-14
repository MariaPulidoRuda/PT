import React from "react";
import Popup from "reactjs-popup";
import "./popup.css";

export const PopUp = ({ item }) => (
  <Popup trigger={<button className="button"> +info </button>} modal nested>
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="actions">
          {" "}
          <h1>{item.Nombre}</h1>{" "}
        {" "}
         
          {" "}
          {item.description}
          <p className="actions"> Color ⟹ 4{item.color}</p>
          <p className="actions"> Manufacturer ⟹ {item.manufacturer}</p>
          <p className="actions"> Price ⟹ {item.price} </p>
          <p className="actions"> Screen ⟹ {item.screen} </p>
          <p className="actions"> Processor ⟹ {item.processor} </p>
          <p className="actions"> Ram ⟹ {item.ram} </p>
        </div>
      </div>
    )}
  </Popup>
);
