import NoteCard from "./NoteCard";

const NoteList = () => {
    return (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />            
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
        </div>
    );
}

export default NoteList;