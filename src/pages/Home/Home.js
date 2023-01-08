import React, { useState } from "react";
// import { Link } from "react-router-dom";

const Home = (params) => {
  const [numerito, setNumerito] = useState(0);

  function resetNumerito(numero) {
    setNumerito(numero);
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setNumerito(numerito + 1)}>
        Cambiar
        {/* <Link to="/about">About</Link> */}
      </button>
      <button onClick={() => resetNumerito(0)}>
        Reset
        {/* <Link to="/about">About</Link> */}
      </button>
      <p>{numerito}</p>
    </div>
  );
};

export default Home;
