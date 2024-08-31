import { createContext, useState } from "react";

export const InnerClickContext = createContext();

export const InnerClickProvider = ({ children }) => {
  const [innerClick, setInnerClick] = useState(false);

  const activateInnerClick = (selected) => {
    setInnerClick(selected);
  };

  const value = {
    innerClick,
    setInnerClick,
    activateInnerClick,
  };

  return (
    <InnerClickContext.Provider value={value}>
      {children}
    </InnerClickContext.Provider>
  );
};
