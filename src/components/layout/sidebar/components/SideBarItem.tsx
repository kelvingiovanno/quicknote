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
                w-full p-3 flex items-center gap-2 rounded-md hover:bg-black/10
                transition-all duration-200 ease-in text-base
                ${isActive ? "bg-black/10 font-bold" : "bg-white text-black/90" }
            `}
        >
            {props.icon}
            {props.title}
        </NavLink>
    );
}

export default SideBarItem;