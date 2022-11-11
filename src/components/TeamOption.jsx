import React from "react";
import { useAllocationContext } from "../context/AllocationContext";

const TeamOption = () => {

  const { selectedTeamName ,handleSelectedTeamName } = useAllocationContext();

  return (
    <>
      <h1>Create Your Team</h1>
      <select className="form-select" value={selectedTeamName} onChange={handleSelectedTeamName}>
        <option value="Dragon">Dragon</option>
        <option value="Eagle">Eagle</option>
        <option value="Snake">Snake</option>
        <option value="Wolf">Wolf</option>
      </select>
    </>
  );
};

export default TeamOption;
