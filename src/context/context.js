import { createContext, useContext, useState } from "react";

const InfoContext = createContext();
export const useInfoContext = () => useContext(InfoContext);

export const InfoProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("profile")) || null
  );
  const [allUsers, setAllUsers] = useState([]);
  const [isActiv, setIsActiv] = useState(
    JSON.parse(localStorage.getItem("isActiv")) || 0
  );
  const exit = () => {
    setCurrentUser(null);
    localStorage.clear();
  };
  const value = {
    isActiv,
    setIsActiv,
    currentUser,
    setCurrentUser,
    exit,
    allUsers,
    setAllUsers,
  };
  return (
    <InfoContext.Provider value={value}>
      <InfoContext.Consumer>{() => children}</InfoContext.Consumer>
    </InfoContext.Provider>
  );
};
