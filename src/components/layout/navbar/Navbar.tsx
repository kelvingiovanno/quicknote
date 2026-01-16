import SearchBar from "@/components/ui/SearchBar"
import Profile from "./Profile"
import CreateNoteButton from "./CreateNoteButton"
import Notification from "./Notification"


const Navbar = () => {

    return (
        <nav className="px-10 py-6 w-full bg-white border-b border-gray-200 flex justify-between items-center">
            <div className="flex-3 flex h-full items-center gap-10">
                <Profile />
                <SearchBar />
            </div>

            <div className="flex-1 flex justify-end items-center gap-10">
                <CreateNoteButton />
                <Notification />                
            </div>
        </nav>
    )
}

export default Navbar