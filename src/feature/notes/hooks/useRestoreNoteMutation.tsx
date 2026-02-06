import { restoreNoteAction } from "@/feature/notes/action";
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useRestoreNoteMutation = (id: string) => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => restoreNoteAction(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["trash-notes"],
            });

            queryClient.invalidateQueries({
                queryKey: ["trash-notes", id],
            });
        }
    })

}

export default useRestoreNoteMutation;