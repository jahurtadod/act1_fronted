import React, { useEffect, useState } from "react";
import { CardAnime } from "../../components/CardAnime.js/CardAnime";
import './Home.css';

const Home = () => {

  const animes = useFetch("json/animeData.json");

  function useFetch (url) {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          setData(myJson);
        });
    },[url]);
    return data;
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Explorar nuevos animes</h1>
      </div>
      
      <div className="cards-container">
        {animes.map((item, index) => {
          return (
            <CardAnime
              key={index}
              animeId={item.animeId}
              animeTitle={item.animeTitle}
              animeImg={item.animeImg}
              animeCategory={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
