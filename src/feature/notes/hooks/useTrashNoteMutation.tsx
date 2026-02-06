import { trashNoteAction } from "@/feature/notes/action"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useTrashNoteMutation = (id: string) => {
    
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: () => trashNoteAction(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["trash-notes"]
            });

            queryClient.invalidateQueries({
                queryKey: ["trash-notes", id]
            });
        }
    })
}

export default useTrashNoteMutation;