import SideBarItem from "./components/SideBarItem";

import { 
    LayoutDashboard , 
    Notebook,
    Star, 
    Trash,
    Settings,
    LogOut 

} from "lucide-react";

const SideBar = () => {
    
    return (
        <aside className="fixed flex flex-col justify-between top-0 bg-white w-64 h-screen px-4">
           
            <div>
                
                <div className="flex items-center w-full h-24 space-x-2">
                    <div className="p-2 bg-blue-600 rounded-md">
                        <p className="text-white text-md font-bold">Qn</p>
                    </div>
                    <p className="font-bold text-xl">Quick Note</p>
                </div>

                <div className="space-y-3">

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
                        title="Settings"
                        navigateTo="/settings"
                        icon={<Settings/>}
                    />

                    <SideBarItem 
                        title="Log Out"
                        navigateTo="/logout"
                        icon={<LogOut/>}
                    />

                </nav>

            </div>

        </aside>
    )
}

export default SideBar;