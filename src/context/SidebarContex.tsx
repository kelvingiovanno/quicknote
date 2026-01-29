import { createContext } from "react";

type SidebarContextType = {
    sidebarOpenState: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
    toggleSidebar: () => void; 
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default SidebarContext;