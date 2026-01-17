import SearchBar from "@/components/ui/SearchBar"
import Profile from "@/components/layout/navbar/components/Profile"
import CreateNoteButton from "@/components/layout/navbar/components/CreateNoteButton"
import NotificationButton from "@/components/layout/navbar/components/NotificationButton"

const Navbar = () => {

    return (
        <header className="px-10 py-6 w-full bg-white flex justify-between items-center">
            <div className="flex-3 flex h-full items-center gap-10">
                <Profile />
                <SearchBar />
            </div>

            <div className="flex-1 flex justify-end items-center gap-10">
                <CreateNoteButton />
                <NotificationButton />                
            </div>
        </header>
    )
}

export default Navbar