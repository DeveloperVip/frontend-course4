import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    navigate("/main");
  };

  return (
    <div className="topa">
      <img src="/1a.png" alt="logo Visual" className="a" />
      

      <div className="login-container">
        <div className="login-box">
          <h2>Đăng nhập vào Quizizz</h2>
          <button
            onClick={() => handleLogin("Google")}
            className="login-button google"
          >
            Tiếp tục với Google
          </button>
          <button
            onClick={() => handleLogin("Email")}
            className="login-button email"
          >
            Tiếp tục với Email
          </button>
          <button
            onClick={() => handleLogin("Facebook")}
            className="login-button facebook"
          >
            Tiếp tục với Facebook
          </button>
          <div className="login-divider">hoặc tiếp tục với</div>
          <div className="other-login-options">
            <button
              onClick={() => handleLogin("Microsoft")}
              className="login-button microsoft"
            >
              Microsoft
            </button>
            <button
              onClick={() => handleLogin("Phone")}
              className="login-button phone"
            >
              Phone
            </button>
            <button
              onClick={() => handleLogin("Apple")}
              className="login-button apple"
            >
              Apple
            </button>
            <button
              onClick={() => handleLogin("Others")}
              className="login-button others"
            >
              Others
            </button>
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
  );
};

export default LoginPage;
