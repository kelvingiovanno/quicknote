
import { Star, Trash2, Download } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import { loadNoteContent } from '../load';
import { useSearchParams } from 'react-router';
import Note from '../components/Note';

const Newnote = () => {

  const [searchParams] = useSearchParams();
  
  const note_id = searchParams.get("id");

  const {data, isLoading} = useQuery({
    queryKey: ["note", note_id],
    queryFn: loadNoteContent,
  });
  
  // const [isFavorite, setFavorite] = useState<boolean>(data?.favorite)  

  return (
    <>
      { isLoading ? <p>loading....</p> :
        <div className="max-w-4xl mx-auto min-h-full p-6 space-y-3 bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden ">

                <div className="flex sm:hidden items-start gap-2 ">
                    <button
                      className="cursor-pointer p-2 rounded-lg hover:bg-yellow-100 text-yellow-500"
                      title="Favorite"
                    >
                      <Star size={20} />
                    </button>

                    <button
                      className="cursor-pointer p-2 rounded-lg hover:bg-blue-100 text-blue-500"
                      title="Export"
                    >
                      <Download size={20} />
                    </button>

                    <button
                      className="cursor-pointer p-2 rounded-lg hover:bg-red-100 text-red-500"
                      title="Delete"
                    >
                      <Trash2 size={20} />
                    </button>
                </div>

                <div className="border-b border-slate-200 flex gap-6">
                  
                  <div className="flex-1">
                    <input
                      type="text"
                      value={data?.title}
                      placeholder="Untitled Note"
                      className="w-full text-2xl font-bold placeholder-slate-400 
                                outline-none bg-transparent mb-3"
                    />

                    <textarea
                      rows={2}
                      value={data?.description}
                      placeholder="Add a short description..."
                      className="w-full resize-none text-sm text-slate-600 
                                placeholder-slate-400 outline-none bg-transparent"
                    />
                  </div>

                  <div className="hidden sm:flex items-start gap-2">
                    <button
                      className="p-2 rounded-lg hover:bg-yellow-100 text-yellow-500"
                      title="Favorite"
                    >
                      <Star className="w-5 h-5" />
                    </button>

                    <button
                      className="p-2 rounded-lg hover:bg-blue-100 text-blue-500"
                      title="Export"
                    >
                      <Download className="w-5 h-5" />
                    </button>

                    <button
                      className="p-2 rounded-lg hover:bg-red-100 text-red-500"
                      title="Delete"
                    >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
            </div>
            <Note content={data?.content} />
          
        </div>
      }
    </>
  );

}

export default Newnote;