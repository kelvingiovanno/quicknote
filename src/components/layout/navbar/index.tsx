import SearchBar from "@/components/layout/navbar/components/SearchBar"
import Profile from "@/components/layout/navbar/components/Profile"
import { Menu, Search } from "lucide-react"
import useSidebar from "@/hook/useSidebar"
import { NavLink } from "react-router"

const Navbar = () => {    

    const sidebar = useSidebar();


    return (
        <header className="h-24 px-10 w-full flex gap-8 justify-between items-center">
            <div className="flex items-center gap-8 flex-1 ">
                <div className="hover:bg-slate-200 p-2 rounded-md transition-colors duration-200 ease-in-out cursor-pointer lg:hidden" onClick={() => {sidebar.openSidebar()}}>
                    <Menu/>
                </div>
                <SearchBar />
            </div>
            
            <NavLink to={"/search-note"} className={"hover:bg-slate-200 p-2 rounded-md transition-colors duration-200 ease-in-out md:hidden"}>
                <Search />  
            </NavLink>

            <Profile /> 
        </header>
    )
}

export default Navbar