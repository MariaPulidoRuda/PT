import "./Home.css";
import "../index.css";
import React from "react";
import { getData } from "../services/services.js";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import Progress_bar from "../components/ProgressBar";

//import { MyState } from '../myState'

const Home = () => {
  const [filter, setFilter] = useState();
  const [phonesCollection, setPhonesCollection] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getData(filter);
      setPhonesCollection(data);
      setLoading(false);
    })();
  }, [filter]);
  console.log(phonesCollection);

  if (loading) {
    return <Progress_bar />;
  }

  return (
    <section>
      <div className="tituloContainer">
        <div></div>
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
