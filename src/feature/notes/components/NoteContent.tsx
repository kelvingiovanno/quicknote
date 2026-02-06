import { Placeholder } from "@tiptap/extensions"
import { EditorContent , useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect, useState } from "react";
import type { Note } from "../types";
import { Download, Star, Trash2 } from "lucide-react";
import useExportNoteMutation from "../hooks/useExportNoteMutation";
import useFavoriteNoteMutation from "../hooks/useFavoriteNoteMutation";
import useTrashNoteMutation from "../hooks/useTrashNoteMutation";
import useUpdateNoteMutation from "../hooks/useUpdateNoteMutation";

const NoteContent = ({ data } : {data: Note}) => {
    
    const [favoriteState, setFavoriteState] = useState<boolean>(data.favorite);
    const [noteTitle, setNoteTitle] = useState<string>(data.title);
    const [noteDesc, setNoteDesc] = useState<string>(data.description);

    const noteFavoriteMutation = useFavoriteNoteMutation(data.id);
    const noteExportMutation = useExportNoteMutation(data.id);
    const noteTrashMutation = useTrashNoteMutation(data.id);
    const updateNoteMutation = useUpdateNoteMutation(data.id);


    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: "Write something …"
            }),
        ],
        content: data.content,
    });
    
    useEffect(() => {
        editor.on("update", () => {
            updateNoteMutation.mutate();
        });

        return () => {
            editor.off("update");
        }
    }, [editor, updateNoteMutation])

    return (
        <>
            <div className="max-w-198.5 mx-auto flex justify-end gap-2 mb-4 ">
                <button
                    className={`cursor-pointer p-2  hover:bg-gray-50 active:bg-gray-100  text-yellow-500 bg-white rounded-md border border-slate-300`}
                    title="Favorite"
                    onClick={() => {
                        setFavoriteState(!favoriteState);
                        noteFavoriteMutation.mutate();
                    }}
                >
                    <Star size={20} className={`${favoriteState ? "fill-yellow-500" : ""}`}/>
                </button>

                <button
                    className="cursor-pointer p-2  hover:bg-gray-50 active:bg-gray-100  text-blue-500 bg-white rounded-md border border-slate-300"
                    title="Export"
                    onClick={() => {
                        noteExportMutation.mutate();
                    }}
                >
                    <Download size={20} />
                </button>

                <button
                    className="cursor-pointer p-2  hover:bg-gray-50 active:bg-gray-100  text-red-500 bg-white rounded-md border border-slate-300"
                    title="Delete"
                    onClick={() => {
                        noteTrashMutation.mutate();
                    }}
                >
                    <Trash2 size={20} />
                </button>
            </div>

            <div className="max-w-198.5 h-280.75 mx-auto p-6 space-y-3 bg-white rounded-lg border border-slate-300 overflow-hidden ">

                
                <div className="border-b border-slate-200 flex gap-6">
                    
                    <div className="flex-1">
                        <input
                            type="text"
                            value={noteTitle}
                            onChange={(e) => {setNoteTitle(e.target.value)}}
                            placeholder="Untitled Note"
                            className="w-full text-2xl font-bold placeholder-slate-400 
                                        outline-none bg-transparent mb-3"
                        />

                        <textarea
                            rows={2}
                            value={noteDesc}
                            onChange={(e) => {setNoteDesc(e.target.value)}}
                            placeholder="Add a short description..."
                            className="w-full resize-none text-sm text-slate-600 
                                        placeholder-slate-400 outline-none bg-transparent"
                        />
                    </div>
                
                </div>
                        
                <EditorContent editor={editor}/> 
            </div>
        </>
    )
}

export default NoteContent;
