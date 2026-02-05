import { useQuery } from "@tanstack/react-query";
import { loadTrashNotes } from "../load";
import NoteList from "../components/NoteList";
import NoteListSkeleton from "../components/NoteListSkeleton";
import { Trash } from "lucide-react";

const TrashNotesPage = () => {
    
    const {data, isLoading} = useQuery({
        queryKey: ["trash-notes"],
        queryFn: loadTrashNotes
    });

    return (
        <>
            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <Trash size={18} />
                </div>

                <h1 className="text-xl font-semibold tracking-tight text-slate-900">
                    Trash Notes
                </h1>
            </div>

            { isLoading ? <NoteListSkeleton /> : <NoteList datas={data} variant="TRASH" /> }     
        </>
    )
}

export default TrashNotesPage;