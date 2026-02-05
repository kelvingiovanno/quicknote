import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { loadFavoriteNotes } from "../load";
import NoteListSkeleton from "../components/NoteListSkeleton";
import NoteList from "../components/NoteList";

const FavoritNotesPage = () => {

    const {data, isLoading} = useQuery({
        queryKey: ["favorite-notes"],
        queryFn: loadFavoriteNotes,
    });

    return (
        <>
            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <Star size={18} />
                </div>

                <h1 className="text-xl font-semibold tracking-tight text-slate-900">
                    Favorite Notes
                </h1>
            </div>

            { isLoading ? <NoteListSkeleton /> : <NoteList datas={data} variant="DEFAULT"/> }

        </>
    )
}

export default FavoritNotesPage;