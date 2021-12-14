import { useContext } from "react";
import { UserContextType } from "../../types";
import { UserContext } from "../context/UserContext";

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return context;
};
