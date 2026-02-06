import { favoriteNoteAction } from "@/feature/notes/action";
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useFavoriteNoteMutation = (id: string) => {
    
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => favoriteNoteAction(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["favorite-notes"],
            });
            queryClient.invalidateQueries({
                queryKey: ["favorite-notes", id],
            });
        }
    });
}

export default useFavoriteNoteMutation;