import React from "react";
import { useAllocationContext } from "../context/AllocationContext";

const PlayerCard = ({ eachPlayer }) => {
  const {selectedTeamName} = useAllocationContext()
  const { id, teamName, nation, name, img } = eachPlayer;


  return (
    <div
    // onClick={(e)=>console.log(e.currentTarget.id)}
    onClick={(e)=>console.log(e.currentTarget.id)}

      className={
        teamName.toLowerCase() !== selectedTeamName.toLowerCase() ? 'card' : 'card standout'
      }
      
      id={id}
      style={{ cursor: "pointer" }}

    >
      <img
        src={img}
        style={{ height: "150px" }}
        className="card-img-top"
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title"> {name}</h5>
        <p className="card-text">
          <b>Nation:</b> {nation}
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;
