const NoteListSkeleton = () => {
    
    
    return (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {
                Array.from({ length: 3}).map((_, i) => (
                    <div key={i} className=" rounded-md border border-slate-200 bg-white/60 p-5 shadow-sm">
                        <div className="h-4 w-3/4 rounded-md bg-slate-200 animate-pulse" />

                        <div className="mt-3 space-y-2">
                            <div className="h-2 w-full rounded bg-slate-200 animate-pulse" />
                            <div className="h-2 w-5/6 rounded bg-slate-200 animate-pulse" />
                        </div>

                        <div className="mt-8 h-2 w-12 rounded bg-slate-200 animate-pulse" />
                    </div>
                ))
            }
        </div>
    );
};

export default NoteListSkeleton;
