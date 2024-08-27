import React, { createContext, useState } from 'react';

// Tạo context
const VisibleSettingContext = createContext();

// Tạo provider
 const VisibleSettingProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  const toggle = () => setIsVisible((prev) => !prev);
  const value = {
    isVisible, setIsVisible,show, hide, toggle
  }
  return (
    <VisibleSettingContext.Provider value={value}>
      {children}
    </VisibleSettingContext.Provider>
  );
};

export {VisibleSettingContext,VisibleSettingProvider}