type ButtonColor =
    | "primary"
    | "secondary"
    | "neutral"
    | "success"
    | "danger"
    | "ghost";

const colorClasses: Record<ButtonColor, string> = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-gray-900",
    neutral: "bg-white border border-gray-300 text-gray-700",
    success: "bg-green-600 text-white",
    danger: "bg-red-600 text-white",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
};

interface ButtonProps {
    icon?:React.ReactNode;
    title: string;
    color: ButtonColor;
    disable: boolean;
}

const Button = (props: ButtonProps) => {
    
    return (
        <button 
            className={`${colorClasses[props.color]} cursor-pointer flex gap-3 px-5 h-14 items-center rounded-2xl whitespace-nowrap`}
            disabled={props.disable}
        >
            {props.icon}
            {props.title}
        </button>
    );
}

export default Button;