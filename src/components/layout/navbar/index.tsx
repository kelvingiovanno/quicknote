import SearchBar from "@/components/layout/navbar/components/SearchBar"
import Profile from "@/components/layout/navbar/components/Profile"
import NotificationButton from "@/components/layout/navbar/components/NotificationButton"

const Navbar = () => {

    return (
        <header className="px-10 py-6 w-full bg-white flex gap-4 justify-end md:justify-between items-center">
            
            <SearchBar />
            
            <div className="flex justify-end items-center gap-4">
                <NotificationButton />                
                <Profile />
            </div>
        </header>
    )
}

export default Navbar