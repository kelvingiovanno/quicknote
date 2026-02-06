import { useMutation } from "@tanstack/react-query"
import { exportNoteAction } from "../action";

const useExportNoteMutation = (id: string) => {
    
    return useMutation({
        mutationFn: () => exportNoteAction(id),
    })
}

export default useExportNoteMutation;