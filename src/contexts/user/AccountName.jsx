import { createContext, useState } from "react";

export const AccountNameContext = createContext();

export const AccountNameProvider = ({ children }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const [accountName, setAccountName] = useState(urlParams.get("userName"));

  const activateAccountName = () => {
    setAccountName(urlParams.get("userName"));
  };

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
