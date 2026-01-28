import SearchBar from "@/components/layout/navbar/components/SearchBar"
import Profile from "@/components/layout/navbar/components/Profile"

const Navbar = () => {

    return (
        <header className="px-10 py-6 w-full flex gap-4 justify-end md:justify-between items-center">
            <SearchBar />
            <Profile /> 
        </header>
    )
}

export default Navbar