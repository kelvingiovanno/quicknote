import SearchBar from "@/components/layout/navbar/components/SearchBar"
import Profile from "@/components/layout/navbar/components/Profile"
import { Menu } from "lucide-react"
import IconButton from "@/components/ui/IconButton"
import useSidebar from "@/hook/useSidebar"

const Navbar = () => {    

    const sidebar = useSidebar();


    return (
        <header className="h-24 px-10 w-full flex gap-4 justify-end md:justify-between items-center">
            <IconButton 
                icon={<Menu/>} 
                className="md:hidden"
                onClick={() => {sidebar.toggleSidebar()}}
            />
            <SearchBar />
            <Profile /> 
        </header>
    )
}

export default Navbar