import React from "react";

const PlayerCard = ({ eachPlayer }) => {
  const { nation, name, id, img } = eachPlayer;

  return (
    <div className="card">
      <img
        src={img}
        alt={name}
        className="card-img-top img-fluid"
        style={{ width: "300px", height: "200px" }}
      />
      <div className="card-body">
        <h1 className="card-title">{name}</h1>
        <p className="card-text">{nation}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
