import { Outlet } from "react-router";

import Navbar from "@/components/layout/navbar";
import SideBar from "@/components/layout/sidebar";

const DashboardLayout = () => {
    
    return (
        <div className="flex w-screen">
            <SideBar />
            <div className="flex flex-col h-screen flex-1">
                <Navbar />
                <main className="flex flex-col overflow-y-auto h-10 bg-gray-200 flex-1 md:rounded-tl-xl border border-slate-300  p-8 lg:p-16">
                    <Outlet />
                </main>
            </div>  
        </div>
    );
}

export default DashboardLayout;