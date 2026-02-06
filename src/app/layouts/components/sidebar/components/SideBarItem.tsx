import { useSidebar } from "@/app/provider";
import { NavLink, useLocation } from "react-router";

interface SideBarItemProps {
    title: string;
    navigateTo: string;
    icon: React.ReactNode;
}

const SideBarItem = (props : SideBarItemProps) => {
    
    const location = useLocation();
    const sidebar = useSidebar();

    const isActive = location.pathname === props.navigateTo;
    
    return (
        <NavLink 
            to={props.navigateTo}
            className={`w-full p-3 flex items-center gap-2 rounded-md hover:bg-gray-200 transition-all duration-200 ease-in text-sm ${isActive ? "bg-gray-200 text-black" : "bg-white text-black/70" }`}
            onClick={sidebar.closeSidebar}
        >
            {props.icon}
            {props.title}
        </NavLink>
    );
}

export default SideBarItem;