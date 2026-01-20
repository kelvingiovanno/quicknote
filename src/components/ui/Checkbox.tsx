import React from "react";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label? : string
}

const Checkbox = ({
    label,
    ...rest
} : CheckboxProps) => {
    return (
        <div className="flex gap-2">
            <input type="checkbox" {...rest}/>
            {label && <label htmlFor="checkbox" className="text-sm text-black/70">{label}</label>}
        </div>
    );
}

export default Checkbox