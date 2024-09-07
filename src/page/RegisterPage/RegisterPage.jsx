import { useState } from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axios";
import Input from "../../components/Input/Input.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupRegister } from "./yupRegister.jsx";
import { APIUser } from "../../services/API/APIUser.jsx";
import { toast } from "react-toastify";
const Register = () => {
  const navigate = useNavigate();
  const fieldForm = [
    "email",
    "age",
    "firstName",
    "lastName",
    "userName",
    "password",
  ];
  const { control, handleSubmit } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      age: "",
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
    },
    resolver: yupResolver(yupRegister),
  });
  const onSubmit = async (data) => {
    // console.log(data);
    // alert(JSON.stringify(data));
    toast("Đăng ký thành công !", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    const response = await APIUser.APIRegistor(data);
    // console.log("🚀 ~ onSubmit ~ response:", response);
    if (response.data) {
      toast("Đăng nhập với email !", {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/login/email");
    }
  };
  return (
    <div className="w-full h-screen flex items-center bg-slate-400">
      <div className="register">
        <h1>đăng ký</h1>
        <form className="form-register" onSubmit={handleSubmit(onSubmit)}>
          <div className="frame">
            {fieldForm.map((field, index) => {
              return (
                <div key={index} className="input-register">
                  <Input
                    label={field}
                    required
                    control={control}
                    name={field}
                    type={field}
                  />
                </div>
              );
            })}
          </div>
          <div className="button-register left">
            <button type="submit">đăng ký</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
