import { Placeholder } from "@tiptap/extensions"
import { EditorContent , useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect } from "react";

const Note = ({content} : {content: string}) => {
    
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: "Write something …"
            }),
        ],
        content: content,
    });
    
    useEffect(() => {
        editor.on("update", () => {
            console.log("note saved");
        });

        return () => {
            editor.off("update");
        }
    }, [editor])

    return (
       <EditorContent editor={editor}/> 
    )
}

export default Note;