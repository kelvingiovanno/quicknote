import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router";


const SearchBar = () => {

    const [query, setQuery] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();

        if(!query.trim()) return;

        navigate(`/notes?search=${encodeURIComponent(query)}`)
    }


    return (
        <form 
            onSubmit={e => {handleSubmit(e)}}
            className="md:min-w-80 md:max-w-lg md:flex-1 border-3 border-gray-200 md:rounded-lg flex items-center md:h-12 p-2 rounded-xl md:px-4 gap-4"
        >
            
            <Link to={"/search-note"} className="md:hidden">
                <Search className="w-5 h-5"/>
            </Link>

            <Search className="hidden md:block w-5 h-5"/>

            <input 
                type="text" 
                placeholder="Search your notes"
                className="h-full flex-1 outline-none text-base hidden md:block"
                onChange={e => {setQuery(e.target.value)}}
            />

        </form>
    )
}

export default SearchBar;