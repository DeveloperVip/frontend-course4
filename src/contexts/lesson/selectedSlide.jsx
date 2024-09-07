import { createContext, useState } from "react";

export const SelectedSlideContext = createContext();

export const SelectedSlideProvider = ({ children }) => {
  const [selectedSlide, setSelectedSlide] = useState(1);

  const activateSelectedSlide = (id) => {
    setSelectedSlide(id);
  };

  const value = {
    selectedSlide,
    setSelectedSlide,
    activateSelectedSlide,
  };

  return (
    <SelectedSlideContext.Provider value={value}>
      {children}
    </SelectedSlideContext.Provider>
  );
};
