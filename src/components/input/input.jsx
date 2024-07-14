import { Controller } from "react-hook-form";

// The following component is an example of your existing Input Component
const Input = ({ label, control, name }) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState }) => {
      return (
        <>
          <label>{label}</label>
          <input {...field} />
          <div>{fieldState?.error?.message}</div>
        </>
      );
    }}
  />
);

export default Input;
