import { Outlet } from "react-router";

import Navbar from "@/backup/_components/layout/navbar";
import SideBar from "@/backup/_components/layout/sidebar";
import SidebarProvider from "@/backup/_providers/SidebarProvider";

const MainLayout = () => {
    
    return (
        <SidebarProvider> 
            <div className="flex w-screen">
                <SideBar />
                <div className="flex-1 flex flex-col h-screen">
                    <Navbar />
                    <main className="flex-1 overflow-y-auto bg-slate-200 lg:rounded-tl-xl border border-slate-300">
                        <div className="p-8 xl:mt-10 mx-auto max-w-7xl ">
                            <Outlet />
                        </div>
                    </main>
                </div>  
            </div>
        </SidebarProvider>
    );
}

export default MainLayout;