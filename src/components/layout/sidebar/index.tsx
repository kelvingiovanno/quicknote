import SideBarItem from "./components/SideBarItem";

import { House, Notebook, Star, Trash } from "lucide-react";

const SideBar = () => {
    
    return (
        <aside className="fixed top-0 bg-white w-72 h-screen px-5">

            <div className="my-10">
                <h1>QuicNote</h1>
            </div>

            <nav className="space-y-2">
                <SideBarItem 
                    title="Home"
                    navigateTo="/home"
                    icon={<House/>}
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
        </aside>
    )
}

export default SideBar;