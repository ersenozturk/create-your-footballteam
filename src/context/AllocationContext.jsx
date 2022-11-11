import { createContext, useContext } from "react";
import { footballers } from "../helper/footballers";

//! create-context
export const AllocationContext = createContext();

//! provide-context
export const AllocationProvider = ({ children }) => {
  const footballersArr = footballers;

  const users = "";
  const values = { users };

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
