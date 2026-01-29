import type React from "react"

type InconButtonProps = React.HTMLAttributes<HTMLDivElement> & {
    icon : React.ReactNode
}

const IconButton = ({
    icon,
    ...rest
}: InconButtonProps) => {
    
    return (
        <div
            className="border-2 border-slate-300 bg-white rounded-md cursor-pointer active:bg-gray-200 h-10 w-10 flex justify-center items-center" 
            {...rest}
        >
            {icon}
        </div>
    )
}

export default IconButton;