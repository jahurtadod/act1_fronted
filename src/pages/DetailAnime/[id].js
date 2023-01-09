import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardList } from "../../components/CardList/CardList";

const Anime = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("../json/animeData.json");
      const json = await response.json();
      const anime = json.find((item) => item.animeId === id);
      setAnime(anime);
    }

    fetchData();
  }, [id]);

  console.log(anime);
  return (
    <div>
      <h1>{id}</h1>
      <h2>{anime.animeTitle}</h2>
      <img src={anime.animeImg} alt={anime.animeTitle} />
      <CardList/>
    </div>
  );
};

export { Anime };
