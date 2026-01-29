import SidebarContext from "@/context/SidebarContex";
import { useContext } from "react";

const useSidebar = () => {
 
    const ctx = useContext(SidebarContext);

    if(!ctx) {
        throw Error("useSidebar must be used inside SidebarProvider");
    }

    return ctx;
}

export default useSidebar;