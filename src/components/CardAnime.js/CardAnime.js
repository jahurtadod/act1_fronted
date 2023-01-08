import "./CardAnime.css";
import React from "react";
import { Link } from "react-router-dom";

function CardAnime({ animeId, animeTitle, animeImg, animeCategory }) {
  return (
    <Link to={`/anime/${animeId}`}>
      <div className="card-anime">
        <img src={animeImg} alt={animeTitle} />
        <div className="container">
          <h4>{animeTitle}</h4>
          <p>{animeCategory}</p>
        </div>
      </div>
    </Link>
  );
}

export { CardAnime };
