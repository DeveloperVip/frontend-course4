import { Controller } from "react-hook-form";
import { TEInput } from "tw-elements-react";
import "./Input.css";
// The following component is an example of your existing Input Component
const Input = ({ label, control, name, type = "" }) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState }) => {
      return (
        <>
          <label>
            {label === "email"
              ? "Email"
              : label === "age"
              ? "Tuổi"
              : label === "firstName"
              ? "Họ"
              : label === "lastName"
              ? "Tên"
              : label === "userName"
              ? "Tên người dùng"
              : "Mật khẩu"}
          </label>
          <TEInput
            {...field}
            type={type}
            className="mb-6 border-black rounded-lg"
            size="lg"
          ></TEInput>
          <div className="w-96 error">
            <>{fieldState?.error?.message}</>
          </div>
        </>
      );
    }}
  />
);

export default Input;
