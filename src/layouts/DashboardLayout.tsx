import { Outlet } from "react-router";

import Navbar from "@/components/layout/navbar";
import SideBar from "@/components/layout/sidebar";
import SidebarProvider from "@/providers/SidebarProvider";

const DashboardLayout = () => {
    
    return (
        <SidebarProvider> 
            <div className="flex w-screen">
                <SideBar />
                <div className="flex-1 flex flex-col h-screen">
                    <Navbar />
                    <main className="flex-1 overflow-y-auto bg-slate-200 md:rounded-tl-xl border border-slate-300">
                        <div className="p-8 xl:mt-10 mx-auto max-w-7xl ">
                            <Outlet />
                        </div>
                    </main>
                </div>  
            </div>
        </SidebarProvider>
    );
}

export default DashboardLayout;