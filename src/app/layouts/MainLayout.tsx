import { Outlet } from "react-router";

import Navbar from "@/app/layouts/components/navbar";
import SideBar from "@/app/layouts/components/sidebar";

const MainLayout = () => {
    
    return (
        <div className="flex w-screen">
            <SideBar />
            <div className="flex-1 flex flex-col h-screen">
                <Navbar />
                <main className="flex-1 overflow-y-auto bg-slate-200 lg:rounded-tl-xl border border-slate-300">
                    <div className="p-8 mx-auto max-w-7xl h-full pt-16">
                        <Outlet />
                    </div>
                </main>
            </div>  
        </div>
    );
}

export default MainLayout;