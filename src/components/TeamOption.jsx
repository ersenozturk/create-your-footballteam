import React from "react";
import { useAllocationContext } from "../context/AllocationContext";

const TeamOption = () => {

  const { selectedTeamName ,handleSelectedTeamName } = useAllocationContext();

  return (
    <>
      <h1>Create Your Team</h1>
      <select className="form-select" value={selectedTeamName} onChange={handleSelectedTeamName}>
        <option value="dragon">Dragon</option>
        <option value="eagle">Eagle</option>
        <option value="snake">Snake</option>
        <option value="wolf">Wolf</option>
      </select>
    </>
  );
};

export default TeamOption;
