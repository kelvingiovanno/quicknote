import { NavLink, useLocation } from "react-router";

interface SideBarItemProps {
    title: string;
    navigateTo: string;
    icon: React.ReactNode;
}

const SideBarItem = (props : SideBarItemProps) => {
    
    const location = useLocation();

    const isActive = location.pathname === props.navigateTo;
    
    return (
        <NavLink 
            to={props.navigateTo}
            className={`
                w-full h-14 flex items-center gap-2 font-semibold p-4 rounded-md hover:bg-slate-200
                transition-all duration-200 ease-in text-sm 
                ${isActive ? "bg-slate-200 text-blue-700" : "bg-white text-black" }
            `}
        >
            {props.icon}
            {props.title}
        </NavLink>
    );
}

export default SideBarItem;