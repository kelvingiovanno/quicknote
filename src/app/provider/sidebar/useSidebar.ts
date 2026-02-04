import { useContext } from "react";
import SidebarContext from "@/app/provider/sidebar/sidebar.context";

export const useSidebar = () => {
 
    const ctx = useContext(SidebarContext);

    if(!ctx) {
        throw Error("useSidebar must be used inside SidebarProvider");
    }

    return ctx;
}