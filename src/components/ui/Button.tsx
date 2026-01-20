import type React from "react";

type ButtonVariant = "PRIMARY" | "SECONDARY";

const BUTTON_VARIANT_STYLES : Record<ButtonVariant,string> = {
    PRIMARY : "bg-blue-600 text-white",
    SECONDARY: "bg-gray-600 text-white",
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
            className={`text-base text-center w-full cursor-pointer py-2 rounded-md ${BUTTON_VARIANT_STYLES[variant]} ${className}`}
            disabled={disabled || isLoading}
            {...rest}
        >
            {title}
        </button>
    );
}

export default Button;