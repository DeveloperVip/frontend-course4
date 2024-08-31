// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";

import { BsMicrosoft } from "react-icons/bs";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { SiApple } from "react-icons/si";
import { useEffect } from "react";
// import LoginEmail from "./LoginEmail";
const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    navigate(provider);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    console.log("vào được đây");
    
    if (token) {
      // Save the token to local storage or context
      localStorage.setItem("token", token);
      navigate("/");
    } else {
      // Handle the case where there is no token (optional)
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="topa h-screen gap-5 flex-col">
      <div className="h-14 header-login p-3"><img src="/1a.png" alt="logo Visual" className="h-full text-white" /></div>

      <div className="flex items-center justify-center h-full">
      <div className="login-container">
        <div className="login-box">
          <h2>Đăng nhập vào Quizizz</h2>
          <Link
            to="http://localhost:8000/user/auth/google"
            className="login-button google flex justify-start gap-10 items-center hover:text-slate-300"
          >
            <FaGoogle />
            Tiếp tục với Google
          </Link>
          <button
            onClick={() => handleLogin("/login/email")}
            className="login-button email flex justify-start gap-10 items-center"
          >
            <MdEmail />
            Tiếp tục với Email
          </button>
          <button
            onClick={() => handleLogin("/login/email")}
            className="login-button facebook flex justify-start gap-10 items-center"
          >
            <FaFacebook />
            Tiếp tục với Facebook
          </button>
          <div className="login-divider">hoặc tiếp tục với</div>
          <div className="w-full flex justify-center">
          <div className="other-login-options justify-evenly w-fit px-10 gap-4">
            <div className=""><button
              onClick={() => handleLogin("/login/email")}
              className="login-button microsoft w-fit"
            >
              <BsMicrosoft />
            </button></div>
            <div className="">
            <button
              onClick={() => handleLogin("/login/email")}
              className="login-button phone w-fit"
            >
              <FaPhoneSquareAlt />
            </button>
            </div>
            <div className="">
            <button
              onClick={() => handleLogin("/login/email")}
              className="login-button apple w-fit"
            >
              <SiApple />
            </button>
            </div>
           <div className="">
           <button
              onClick={() => handleLogin("/login/email")}
              className="login-button others w-fit"
            >
              Others
            </button>
           </div>
          </div>
          </div>
          <div className="register-link">
            Không có tài khoản? <a href="/register">Đăng ký</a>
          </div>
        </div>
        <div className="login-image-container">
          <img src="/teack.png" alt="Login Visual" className="login-image" />
        </div>
      </div>
      </div>
    </div>

  );
};

export default LoginPage;
