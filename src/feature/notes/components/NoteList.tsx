import type { Note, NoteCardVariant } from "../types";
import NoteCard from "./NoteCard";

const NoteList = ({ datas, variant } : {
    datas: Note[] | undefined,
    variant?: NoteCardVariant
}) => {
    return (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 ">
            {
                datas ? 
                    datas.map((data, index) => (
                        <NoteCard key={index} data={data} variant={variant}/>
                    )) 
                :
                    <p>You dont't have any notes</p>
            }
        </div>
    );
}

export default NoteList;