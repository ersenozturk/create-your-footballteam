import React, { useState } from "react";
import { footballers } from "../helper/footballers";
import PlayerCard from "./PlayerCard";

const Person = () => {
  const [player, setPlayer] = useState(footballers);
  return (
    <div className="row justify-content-center">
      <div className="col-8 d-flex align-items-stretch">
        <div id="allCardDiv" className="gap-3">
          {player.map((eachPlayer) => (
            <PlayerCard key={eachPlayer.id} eachPlayer={eachPlayer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Person;
