import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./contexts/auth/authContext.jsx";
import { VisibleSettingProvider } from "./contexts/visiableSettingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <VisibleSettingProvider>
        <App />
      </VisibleSettingProvider>
    </AuthProvider>
  </>
);
