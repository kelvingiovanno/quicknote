import { useEffect, useRef, useState } from "react";
import SideBarItem from "./components/SideBarItem";
import { Menu } from "lucide-react";

import { 

    LayoutDashboard , 
    Notebook,
    Star, 
    Trash,
    LogOut 

} from "lucide-react";

const SideBar = () => {

    const [open, setOpen] = useState<boolean>(true);
    const sidebarRef = useRef<HTMLElement | null>(null)


    useEffect(() => {
    

        document.addEventListener("mousedown", (event: MouseEvent) => {
            
            if(!sidebarRef.current) return;
            
            if(!sidebarRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
            
        });

    }, [])

    return (
        <>

            <div 
                className="fixed lg:hidden m-6 p-2 bg-white border-3 border-gray-200 rounded-xl"
                onClick={() => {setOpen(!open)}}
            >
                <Menu  className="w-5 h-5"/>
            </div>
            
            <div className={`z-10 md:opacity-0 md:pointer-events-none fixed w-screen h-screen bg-black transition-opacity duration-300 ease-in-out  ${open ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"}`}></div>

            <aside
                ref={sidebarRef} 
                className={`z-20 fixed lg:static flex flex-col justify-between bg-white w-64 h-screen px-4 transition-transform duration-300 ease-in-out lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
           
                <div>
                    
                    <div className="flex items-center w-full h-24 space-x-2">
                        <div className="bg-blue-600 rounded-md w-9 h-9 flex items-center justify-center">
                            <p className="text-white text-md font-bold m-0">Qn</p>
                        </div>
                        <p className="font-bold text-xl">Quick Note</p>
                    </div>

                    <div className="space-y-3 py-3">

                        <p className="text-sm text-black/80">Menu</p>

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

                    <p className="text-sm text-black/80">General</p>

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