import type React from "react";

type ButtonVariant = "PRIMARY" | "SECONDARY";

const BUTTON_VARIANT_STYLES : Record<ButtonVariant,string> = {
    PRIMARY : "bg-blue-600 text-white/90 active:bg-blue-800 active:text-white ",
    SECONDARY: "bg-white border-2 border-blue-600 text-blue-600/80 active:bg-slate-100 active:text-blue-600",
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    variant: ButtonVariant
    isLoading: boolean;
};

const Button = ({
    title,
    variant = "PRIMARY",
    className = "",
    disabled,
    isLoading,
    ...rest
}: ButtonProps) => {

    return (
        <button 
            className={`text-base text-center w-full cursor-pointer py-2 rounded-md transition-color duration-100 ease-in-out ${BUTTON_VARIANT_STYLES[variant]} ${className}`}
            disabled={disabled || isLoading}
            {...rest}
        >
            {title}
        </button>
    );
}

export default Button;