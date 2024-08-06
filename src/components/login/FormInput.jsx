import { Controller } from "react-hook-form";
import { TEInput } from "tw-elements-react";

// The following component is an example of your existing Input Component
const Input = ({ label, control, name }) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState }) => {
      return (
        <div className="relative">
          <label>{label}</label>
          {/* <TEInput
            type="password"
            {...field}
            className="mb-6"
            size="lg"
          ></TEInput> */}
          <div className="w-6 h-6 flex items-center justify-center absolute left-2 inset-0 my-auto text-dark-4">
            i
          </div>
          <input className="focus:outline-none h-10 w-full py-2 text-sm placeholder-sm remove-number-selector pl-9 border border-solid border-dark-6 rounded focus:ring-2 focus:ring-lilac focus:ring-offset-0 focus:ring-inset bg-light-3 text-dark-2  border-dark-4 placeholder-dark-5 pr-9 pr-10" {...field}/>
          <div className="text-red-500">{fieldState?.error?.message}</div>
        </div>
      );
    }}
  />
);

export default Input;
