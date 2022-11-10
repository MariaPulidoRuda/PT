import "./cards.css";
import React from "react";
import { PopUp } from "./popup";

//import 'bootstrap'
//import Popup from 'prop-types'
//import Popup from 'reactjs-popup'
//import "reactjs-popup/dist/index.css";



const Cards = ({ phone }) => {
  return (
    <>

      <div className="cardContainer" id={phone.Nombre}>
        <p>{phone.Nombre}</p>
        <img src={phone.Imagen} />
        <PopUp item={phone}/>
      </div>
      
    </>
  );
};
export default Cards;

/*<Popup trigger={<button className="btn-modal"><h1>More info.</h1></button>}>
<h2 className="description">{phone.description}</h2>
</Popup>
/**/
