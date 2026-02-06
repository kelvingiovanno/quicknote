import { useMutation, useQueryClient } from "@tanstack/react-query"
import { removeNoteAction } from "../action";

const useRemoveMutation = (id: string) => {
    
    const clientQuery = useQueryClient();
    
    return useMutation({
        mutationFn: () => removeNoteAction(id),
        onSuccess: () => {
            clientQuery.invalidateQueries({
                queryKey: ["trash-note"]
            });
        }
    });
}

export default useRemoveMutation;