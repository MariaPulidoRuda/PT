import './Home.css'
import '../index.css'
import React from "react";
import { getData } from "../services/services.js";
import { useState, useEffect } from "react";
import Cards from '../components/Cards'
//import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';

// import Cards from "../components/cards"
//import './Poses.css'

//import { Link, Outlet } from 'react-router-dom'

//import { MyState } from '../myState'


const Home = () => {
  const [filter, setFilter] = useState();
  const [phonesCollection, setPhonesCollection] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getData(filter);
      setPhonesCollection(data);
    })();
  }, [filter]);
  console.log(phonesCollection);

  return (
    <section >
      <div className="tituloContainer">
        <div>
        </div>
      </div>
      <div className="homeContainer">
      {phonesCollection.map((phone) => (
        <Cards key={phone.Nombre} phone={phone} />
      ))}
      </div>
     
      </section>
  );
};

export default Home;
