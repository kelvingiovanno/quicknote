export type Note = {
    id: string
    title: string
    description: string
    date: string
    content: string
    favorite: boolean
    trash: boolean
};

export type NoteCardVariant = "DEFAULT" | "TRASH";