import "./CardAnime.css";
import React from "react";
import { Link } from "react-router-dom";
import { BtnIcon } from "../BtnImage/BtnIcon";
import * as FaIcons from "react-icons/hi";

function CardAnime({ animeId, animeTitle, animeImg, animeCategory }) {
  return (
    <Link to={`/anime/${animeId}`} className="card-anime">
      <img src={animeImg} alt={animeTitle} />
      <div className="container">
        <h4>{animeTitle}</h4>
        <p>{animeCategory}</p>
        <BtnIcon icon={<FaIcons.HiOutlineHeart />} />
      </div>
    </Link>
  );
}

export { CardAnime };
