const NoteCard = () => {
    return (
        <div className="group relative rounded-md border border-slate-200 bg-white p-5 shadow-sm transition-all hover:scale-101 cursor-pointer">
            <div className="flex h-full flex-col justify-between gap-4">
                <div className="space-y-1">
                    <h3 className="line-clamp-1 text-sm font-medium text-slate-900">
                        Untitled Note
                    </h3>
                    <p className="line-clamp-2 text-xs leading-relaxed text-slate-600">
                        This is a short preview of your note content. You can
                        replace this later with real data.
                    </p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Jan 28, 2026</span>
                    <span className=" opacity-0 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-slate-700 font-medium">
                        Open
                    </span>
                </div>
            </div>
        </div>
    );
}

export default NoteCard;