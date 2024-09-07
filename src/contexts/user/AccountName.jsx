import { createContext, useEffect, useState } from "react";

export const AccountNameContext = createContext();

export const AccountNameProvider = ({ children }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const [accountName, setAccountName] = useState();

  const activateAccountName = () => {
    setAccountName(localStorage.getItem("userName"));
  };
  useEffect(() => {
    activateAccountName();
  }, [localStorage.getItem("userName")]);

  const value = {
    accountName,
    setAccountName,
    activateAccountName,
  };

  return (
    <AccountNameContext.Provider value={value}>
      {children}
    </AccountNameContext.Provider>
  );
};
