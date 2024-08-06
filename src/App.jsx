import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import LoginPage from "./page/LoginPage/LoginPage";
import LoginEmail from "./components/login/LoginEmail";

function App() {
  return (
    <div className="App">
      <BrowserRouter><Header />
        <Routes>
        
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/login/email" element={<LoginEmail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
