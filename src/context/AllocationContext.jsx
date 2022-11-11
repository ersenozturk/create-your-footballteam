import { createContext, useContext, useEffect, useState } from "react";
import { footballers } from "../helper/footballers";

//! create-context
export const AllocationContext = createContext();

//! provide-context
export const AllocationProvider = ({ children }) => {
  const [selectedTeamName, setselectedTeamName] = useState( JSON.parse(localStorage.getItem("mySelectedTeam")) || "Eagle");
  const [playersData, setPlayersData] = useState(JSON.parse(localStorage.getItem("myFootbalTeam")) || footballers)

  useEffect(() => {
    localStorage.setItem("myFootbalTeam", JSON.stringify(playersData));
    localStorage.setItem('mySelectedTeam',JSON.stringify(selectedTeamName))

  }, [playersData,selectedTeamName])


  
  

  const handleSelectedTeamName = (e) => {
    setselectedTeamName(e.target.value);
  };

  const handleAfterClickCard = (e) => {
    const playerTransfer = footballers.map((f) =>
      f.id === Number(e.currentTarget.id) ? f.teamName === selectedTeamName ? {...f, teamName: ''} : {...f, teamName: selectedTeamName}
                                          : f
    );

    setPlayersData(playerTransfer)
  };



  const values = {
    playersData,
    selectedTeamName,
    setselectedTeamName,
    handleSelectedTeamName,
    handleAfterClickCard,
  };

  return (
    <AllocationContext.Provider value={values}>
      {children}
    </AllocationContext.Provider>
  );
};

//! create-customhook and consume-context
export const useAllocationContext = () => {
  return useContext(AllocationContext);
};
