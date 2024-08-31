import { createContext, useState } from "react";

export const CheckpointContext = createContext();

export const CheckpointProvider = ({ children }) => {
  const [checkpoint, setCheckpoint] = useState({});

  const activateCheckpoint = (selected) => {
    setCheckpoint({...checkpoint, ...selected});
  };

  const value = {
    checkpoint,
    setCheckpoint,
    activateCheckpoint,
  };

  return (
    <CheckpointContext.Provider value={value}>
      {children}
    </CheckpointContext.Provider>
  );
};