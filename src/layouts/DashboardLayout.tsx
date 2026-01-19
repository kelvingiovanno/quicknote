import { Outlet } from "react-router";

import Navbar from "@/components/layout/navbar";
import SideBar from "@/components/layout/sidebar";

const DashboardLayout = () => {
    
    return (
        <div className="w-screen">
            <SideBar />
            <div className="ml-64 flex flex-col h-screen">
                <Navbar />
                <main className="bg-slate-100 flex-1 rounded-tl-xl">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;