import { Outlet } from "react-router";

import Navbar from "@/components/layout/navbar";
import SideBar from "@/components/layout/SideBar";

const DashboardLayout = () => {
    
    return (
        <div className="w-screen">
            <SideBar />
            <div className="ml-72 flex flex-col h-screen">
                <Navbar />
                <main className="bg-slate-100 flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;