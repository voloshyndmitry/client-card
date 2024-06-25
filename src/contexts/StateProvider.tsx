import React, { createContext, useState, useContext, ReactNode } from "react";
import { UserIntf } from "../Interfaces/common";

interface StateContextProps {
  users: UserIntf[];
  setUsers: React.Dispatch<React.SetStateAction<UserIntf[]>>;
  selectedPage: number;
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

interface StateProviderProps {
  children: ReactNode;
}

export const StateProvider = ({ children }: StateProviderProps) => {
  const [users, setUsers] = useState<UserIntf[]>([]);
  const [selectedPage, setSelectedPage] = useState<number>(1);

  return (
    <StateContext.Provider
      value={{ users, setUsers, selectedPage, setSelectedPage }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextProps => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within an StateProvider");
  }
  return context;
};
