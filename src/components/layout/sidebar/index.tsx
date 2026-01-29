import useSidebar from "@/hook/useSidebar";
import SideBarItem from "./components/SideBarItem";

import { 

    LayoutDashboard , 
    Notebook,
    Star, 
    Trash,
    LogOut, 
    X

} from "lucide-react";
import { useEffect, useRef } from "react";
import IconButton from "@/components/ui/IconButton";

const SideBar = () => {

    const sidebar = useSidebar();

    const sidebarRef = useRef<HTMLElement|null>(null);

    useEffect(() => {
        
        if(!sidebar.sidebarOpenState) return;

        const handleClickOutside = (event: MouseEvent) => {
 
            if (!sidebarRef.current) return;

            if (!sidebarRef.current.contains(event.target as Node)) {
               sidebar.closeSidebar();
            }

            console.log(sidebar)
        };

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        

    }, [sidebar]);

    return (
        <>
            
            <div className={`z-10 fixed left-0 bg-black/30 w-screen h-screen lg:hidden transition-opacity duration-300 ease ${sidebar.sidebarOpenState ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0" }`}></div>

            <aside
                ref={sidebarRef}
                className={`z-10 fixed flex flex-col justify-between bg-white min-w-60 h-screen px-4 lg:static lg:translate-x-0 transition-transform duration-300 ease-in-out ${sidebar.sidebarOpenState ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div>
                    
                    <div className="flex w-full justify-end mt-5 lg:hidden">
                        <IconButton icon={<X/>} className="border-none text-black/50" onClick={() => {sidebar.closeSidebar()}}/>
                    </div>

                    <div className="flex items-center w-full h-24 space-x-2">
                        <div className="bg-blue-600 rounded-md w-9 h-9 flex items-center justify-center">
                            <p className="text-white text-md font-bold m-0">Qn</p>
                        </div>
                        <p className="font-bold text-xl">Quick Note</p>
                    </div>

                    <div className="space-y-3 py-3">

                        <p className="text-xs text-black/70">Menu</p>

                        <nav className="space-y-2">

                            <SideBarItem 
                                title="Dashboard"
                                navigateTo="/"
                                icon={<LayoutDashboard/>}
                            />
                            
                            <SideBarItem 
                                title="Notes"
                                navigateTo="/notes"
                                icon={<Notebook/>}
                            />

                            <SideBarItem 
                                title="Favorites"
                                navigateTo="/favorites"
                                icon={<Star/>}
                            />

                            <SideBarItem 
                                title="Trash"
                                navigateTo="/trash"
                                icon={<Trash/>}
                            />

                        </nav>
                        
                    </div>

                </div>
                
                <div className="mb-8 space-y-3">

                    <p className="text-xs text-black/70">General</p>

                    <nav className="space-y-2">

                        <SideBarItem 
                            title="Log Out"
                            navigateTo="/logout"
                            icon={<LogOut/>}
                        />

                    </nav>

                </div>

            </aside>
        </>
    )
}

export default SideBar;