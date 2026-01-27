import { Outlet } from "react-router";

import Navbar from "@/components/layout/navbar";
import SideBar from "@/components/layout/sidebar";

const DashboardLayout = () => {
    
    return (
        <div className="w-screen flex">
            <SideBar />
            <div className="flex flex-col h-screen flex-1">
                <Navbar />
                <main className="overflow-auto  h-10 bg-gray-200 flex-1 rounded-tl-xl border border-slate-300 p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;