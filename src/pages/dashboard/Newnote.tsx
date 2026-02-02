// import "@/styles/editor.css"
import { Tiptap, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Placeholder } from '@tiptap/extensions'
import { Star, Trash2, Download } from "lucide-react";
import { useEffect } from 'react';

const Newnote = () => {

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write something …"
      })
    ],
  })

  useEffect(() => {
    
    if (!editor) return;

    let timeout: number | undefined;

    const onUpdate = () => {

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        console.log("autosave after typing");
        // save(editor.getHTML())
      }, 1000);

    };

    editor.on("update", onUpdate);

    return () => {
      editor.off("update", onUpdate);
      clearTimeout(timeout);
    };

  }, [editor]);
  
  return (
    <div className="max-w-4xl mx-auto p-2">
      <Tiptap instance={editor}>
        <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">

          <div className="p-6 border-b border-slate-200 flex gap-6">
            
            <div className="flex-1">
              <input
                type="text"
                placeholder="Untitled Note"
                className="w-full text-2xl font-bold placeholder-slate-400 
                          outline-none bg-transparent mb-3"
              />

              <textarea
                rows={2}
                placeholder="Add a short description..."
                className="w-full resize-none text-sm text-slate-600 
                          placeholder-slate-400 outline-none bg-transparent"
              />
            </div>

            <div className="flex items-start gap-2">
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
          <Tiptap.Content
              className="p-6 block prose prose-slate max-w-none min-h-75 focus:outline-none"
            />
        </div>
      </Tiptap>
    </div>
  );

}

export default Newnote;