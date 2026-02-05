import { Download, Star, Trash2, Undo2, SquareX } from "lucide-react";
import type { Note, NoteCardVariant } from "../types";
import { useNavigate } from "react-router";
import { exportAction, favoriteAction, restoreAction, trashAction } from "../action";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const NoteCard = ({data, variant = "DEFAULT"} : {data: Note, variant?: NoteCardVariant}) => {

    const [favoriteState, setFavorite] = useState<boolean>(data.favorite);
        
    const queryClient = useQueryClient();
    const navigate = useNavigate();


    return (
        <div onClick={() => {navigate(`/note?id=${data.id}`)}} className="group relative rounded-md border border-slate-200 bg-white p-5 shadow-sm transition-all hover:scale-101 cursor-pointer">
            <div className="flex h-full flex-col justify-between gap-4">
                <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                        <h3 className="line-clamp-2 text-sm font-medium text-slate-900">
                            {data.title}
                        </h3>
                        <p className="line-clamp-2 text-xs leading-relaxed text-slate-600">
                            {data.description}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        

                        { variant === "DEFAULT" && (
                            <>
                                <button
                                    className="cursor-pointer p-2 rounded-lg hover:bg-yellow-100 text-yellow-500"
                                    title="Favorite"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        favoriteAction(data.id);
                                        setFavorite(!favoriteState)

                                        queryClient.invalidateQueries({
                                            queryKey: ["favorite-notes"]
                                        });
                                    }}
                                >
                                    <Star className={`transition-all ease-in duration-600 ${favoriteState ? "fill-yellow-300" : ""}`} size={20} />
                                </button>

                                <button
                                    className="cursor-pointer p-2 rounded-lg hover:bg-blue-100 text-blue-500"
                                    title="Export"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        exportAction(data.id);
                                    }}
                                >
                                    <Download size={20}/>
                                </button>

                                <button
                                    className="cursor-pointer p-2 rounded-lg hover:bg-red-100 text-red-500"
                                    title="Delete"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        trashAction(data.id);
                                    }}
                                >
                                    <Trash2 size={20}/>
                                </button>
                            </>
                        )}

                        { variant === "TRASH" && (
                            <>
                                <button
                                    className="cursor-pointer p-2 rounded-lg hover:bg-blue-100 text-blue-500"
                                    title="Restore"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();

                                        restoreAction(data.id);
                                        
                                        queryClient.invalidateQueries({
                                            queryKey: ["trash-notes"]
                                        });
                                    }}
                                >
                                    <Undo2 size={20}/>
                                </button>

                                <button
                                    className="cursor-pointer p-2 rounded-lg hover:bg-red-100 text-red-500"
                                    title="Remove"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();

                                        restoreAction(data.id);
                                        
                                        queryClient.invalidateQueries({
                                            queryKey: ["trash-notes"]
                                        });
                                    }}
                                >
                                    <SquareX size={20}/>
                                </button>

                            </> 
                        )}  
                    </div>

                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 mt-4">
                    <span>{data.date.toString()}</span>
                    <span className="hidden group-hover:block">Click to view</span>
                </div>
            </div>
        </div>
        
    );
}

export default NoteCard;