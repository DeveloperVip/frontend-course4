import React from "react";
import "./LoginPage.css";
import { VscArrowRight } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { BsMicrosoft } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";
import { SiApple } from "react-icons/si";
const LoginPage = () => {
  return (
    <div className="flex justify-between container px-5">
      <div className="login-box">
        <h2 style={{ fontSize: "33px" }}>Chào mừng đến với Quizizz</h2>
        <h3>Tạo tài khoản miễn phí trong 2 bước</h3>
        <button className="login-btn google">
          <FcGoogle /> Tiếp tục với Google <VscArrowRight />
        </button>
        <button className="login-btn email">
          <MdEmail /> Tiếp tục với Email <VscArrowRight />
        </button>
        <button className="login-btn facebook">
          <FaFacebook /> Tiếp tục với Facebook <VscArrowRight />
        </button>
        <p> Hoặc tiếp tục với </p>
        <div className="aicons">
          <BsMicrosoft size={37} />
          <IoIosPhonePortrait size={37} />
          <SiApple size={37} />
        </div>

        <p className="terms">
          Bằng cách đăng ký, bạn đồng ý với <a href="#">Điều khoản dịch vụ</a>{" "}
          và <a href="#">Chính sách quyền riêng tư</a> của chúng tôi
        </p>
        <div className="other-options">
          <div>
            Bạn đã có tài khoản ? <button>Đăng nhập</button>
          </div>
        </div>
      </div>
      <div className="teack-box">
        <img src="/teack.png" alt="anhs" className="logo2" />
      </div>
    </div>
  );
};

export default LoginPage;
