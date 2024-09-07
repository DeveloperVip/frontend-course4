import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

// Tạo context
const VisibleSettingContext = createContext();

// Tạo provider
const VisibleSettingProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => {
    toast("Mở setting !", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    setIsVisible(true);
  };
  const hide = () => {
    toast("Ẩn setting !", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    setIsVisible(false);
  };
  const toggle = () => setIsVisible((prev) => !prev);
  const value = {
    isVisible,
    setIsVisible,
    show,
    hide,
    toggle,
  };
  return (
    <VisibleSettingContext.Provider value={value}>
      {children}
    </VisibleSettingContext.Provider>
  );
};

export { VisibleSettingContext, VisibleSettingProvider };
