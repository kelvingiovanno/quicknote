import React from "react";

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
    label?: string;
    type: "text" | "password";
}

const Input = ({
  label,
  type,
  ...rest  
}: InputProps ) => {
    return (
        <div className="flex flex-col gap-1">
            { label && <label htmlFor={type} className="text-sm text-black/70">{label}</label> }
            <input type={type} {...rest} className="border-2 border-slate-200 text-base p-2 rounded-md outline-blue-500"/>
        </div>
    )
}

export default Input;