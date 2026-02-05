import { useEffect, useRef } from "react";
import { LayoutDashboard, Notebook, Star, Trash, LogOut, X } from "lucide-react";

import { useSidebar } from "@/app/provider";
import SideBarItem from "./components/SideBarItem";

const SideBar = () => {
    
    const { sidebarOpenState, closeSidebar } = useSidebar();
    const sidebarRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
    
        if (!sidebarOpenState) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)){
                closeSidebar();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    
    }, [sidebarOpenState, closeSidebar]);

    return (
        <>
            <div
                onClick={closeSidebar}
                className={`fixed inset-0 z-20 bg-black/30 backdrop-blur-xs lg:hidden transition-opacity duration-300 ${sidebarOpenState ? "opacity-100" : "pointer-events-none opacity-0"}`}
            />

            <aside
                ref={sidebarRef}
                className={`fixed z-30 inset-y-0 left-0 w-64 bg-white flex flex-col justify-between px-4 transition-transform duration-300 ease-in-out ${sidebarOpenState ? "translate-x-0" : "-translate-x-full"} lg:static lg:translate-x-0`}
            >
                
                <div>

                    <div className="flex justify-end py-4 lg:hidden">
                        <button
                            onClick={closeSidebar}
                            className="rounded-md p-2 hover:bg-slate-100 transition"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex items-center gap-3 px-2 py-7">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-white font-bold">
                            Qn
                        </div>
                        <span className="text-lg font-semibold">Quick Note</span>
                    </div>

                    <div className="space-y-4">
                        <p className="px-2 text-sm text-slate-500">
                        Menu
                        </p>

                        <nav className="space-y-2">
                            <SideBarItem title="Dashboard" navigateTo="/" icon={<LayoutDashboard/>} />
                            <SideBarItem title="Notes" navigateTo="/notes" icon={<Notebook/>} />
                            <SideBarItem title="Favorites" navigateTo="/favorites" icon={<Star />} />
                            <SideBarItem title="Trash" navigateTo="/trash" icon={<Trash/>} />
                        </nav>
                    </div>
                </div>

                <div className="pb-6 space-y-4">
                    <p className="px-2 text-sm text-slate-500">
                        General
                    </p>
                    <nav>
                        <SideBarItem
                            title="Log Out"
                            navigateTo="/logout"
                            icon={<LogOut/>}
                        />
                    </nav>
                </div>
                
            </aside>
        </>
    );
};

export default SideBar;