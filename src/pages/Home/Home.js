import React, { useEffect, useState } from "react";
import { CardAnime } from "../../components/CardAnime.js/CardAnime";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("json/animeData.json", {
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
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div className="cards-animes">
        {data.map((item, index) => {
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
