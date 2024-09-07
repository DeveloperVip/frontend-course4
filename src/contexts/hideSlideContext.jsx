// SlideVisibilityContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
export const SlideVisibilityContext = createContext();

// Create a provider component
export const SlideVisibilityProvider = ({ children }) => {
  const [isSlidesVisible, setSlidesVisible] = useState(true);

  const toggleSlidesVisibility = () => {
    setSlidesVisible(prevState => !prevState);
  };

  return (
    <SlideVisibilityContext.Provider value={{ isSlidesVisible, toggleSlidesVisibility ,setSlidesVisible}}>
      {children}
    </SlideVisibilityContext.Provider>
  );
};
