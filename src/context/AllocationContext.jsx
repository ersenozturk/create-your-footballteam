import { createContext, useContext, useState } from "react";
import { footballers } from "../helper/footballers";

//! create-context
export const AllocationContext = createContext();

//! provide-context
export const AllocationProvider = ({ children }) => {

    const [selectedTeamName, setselectedTeamName] = useState('wolf')
    const handleSelectedTeamName = (e) => {
        setselectedTeamName(e.target.value)
    }


  const values = { footballers,selectedTeamName,setselectedTeamName,handleSelectedTeamName };

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
