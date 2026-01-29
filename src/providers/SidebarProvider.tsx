import SidebarContext from "@/context/SidebarContex";
import React, { useState } from "react";

export const SidebarProvider = ({
    children
}: {children: React.ReactNode}) => {
    
    const [sidebarOpenState, setSidebarOpenState] = useState<boolean>(false);
    
    const openSidebar = () => {
        setSidebarOpenState(true);
    };

    const closeSidebar = () => {
        setSidebarOpenState(false);
    }

    const toggleSidebar = () => {
        setSidebarOpenState(!sidebarOpenState);
    }

    return (
        <SidebarContext.Provider value={{sidebarOpenState, openSidebar, closeSidebar, toggleSidebar}}> 
            {children}
        </SidebarContext.Provider>
    )
} 

export default SidebarProvider;