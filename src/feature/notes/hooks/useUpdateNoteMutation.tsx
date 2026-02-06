import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateNoteAction } from "../action"

const useUpdateNoteMutation = (id: string) => {
    
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: () => updateNoteAction(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["notes"],
            });

            queryClient.invalidateQueries({
                queryKey: ["notes", id],
            });
        }
    });
}

export default useUpdateNoteMutation;