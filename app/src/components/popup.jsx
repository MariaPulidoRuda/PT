import React from 'react';
import Popup from 'reactjs-popup';
import './popup.css'


export const PopUp=({item}) => (
  <Popup
    trigger={<button className="button"> +info </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> <h1>{item.Nombre}</h1> </div>
        <div className="actions"> {item.description} </div>
          {' '}
          
        <div className="actions"> {item.color} </div>
        <div className="actions"> {item.manufacturer} </div>
        <div className="actions"> {item.price} </div>
        <div className="actions"> {item.screen} </div>
        <div className="actions"> {item.processor} </div>
        <div className="actions"> {item.ram} </div>
          
          
         
       
      </div>
    )}
  </Popup>
);