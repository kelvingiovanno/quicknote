import { NotepadText } from "lucide-react";
import NoteList from "../components/NoteList";
import NoteListSkeleton from "../components/NoteListSkeleton";
import { useQuery } from "@tanstack/react-query";
import { loadAllNotes } from "../load";

const AllNotesPage = () => {

    const {data, isLoading} = useQuery({
        queryKey: ["notes"],
        queryFn: loadAllNotes,
    });

    return (
        <>
            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <NotepadText size={18} />
                </div>

                <h1 className="text-xl font-semibold tracking-tight text-slate-900">
                    All Notes
                </h1>
            </div>

            { isLoading ? <NoteListSkeleton /> : <NoteList datas={data} variant="DEFAULT"/> }
        </>
    )
}

export default AllNotesPage;