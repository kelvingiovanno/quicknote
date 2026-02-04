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
                w-full p-3 flex items-center gap-2 rounded-md hover:bg-blue-50 transition-all duration-200 ease-in text-sm ${isActive ? "bg-blue-50 text-blue-500" : "bg-white text-black/80" }`}
        >
            {props.icon}
            {props.title}
        </NavLink>
    );
}

export default SideBarItem;