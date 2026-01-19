import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";


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
            className="min-w-80 max-w-lg flex-1 border-2 border-gray-200 rounded-lg flex items-center h-12 px-4 gap-4"
        >
            
            <Search/>
            <input 
                type="text" 
                placeholder="Search your notes"
                className="h-full flex-1 outline-none text-base"
                onChange={e => {setQuery(e.target.value)}}
            />

        </form>
    )
}

export default SearchBar;