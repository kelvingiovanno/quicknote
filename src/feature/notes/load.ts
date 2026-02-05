import type { Note } from "../notes/types";

const mockNotes: Note[] = [
    {
        id: "3f6c4a6e-2b9e-4c5a-9b0f-1a9d7e1a8f23",
        title: "Meeting Notes",
        description: "Summary of project kickoff meeting",
        date: "21 December 2021",
        content: `
            <h2>Project Kickoff</h2>
            <p>We discussed the <strong>project scope</strong> and initial milestones.</p>
            <ul>
                <li>Define requirements</li>
                <li>Set timeline</li>
                <li>Assign responsibilities</li>
            </ul>
            <p><em>Next meeting scheduled for Monday.</em></p>
        `,
        favorite: true,
        trash: false,
    },
    {
        id: "a92d7b14-6e4c-4e2f-8c31-5f6b1a2d9c44",
        title: "React Architecture Ideas",
        description: "Feature-based folder structure thoughts",
        date: "21 December 2021",
        content: `
            <h2>Feature-Based Architecture</h2>
            <p>This approach helps keep the app <strong>scalable</strong> and <strong>maintainable</strong>.</p>
            <blockquote>
                Group by domain, not by file type.
            </blockquote>
            <pre>
                <code>
                    src/features/notes
                    src/features/auth
                </code>
            </pre>
        `,
        favorite: false,
        trash: false,
    },
    {
        id: "5e1a9c33-8b4f-4d12-b6a2-0f7c9e4d21aa",
        title: "Shopping List",
        description: "Things to buy this weekend",
        date: "21 December 2021",
        content: `
            <h3>Groceries</h3>
            <ul data-type="taskList">
                <li data-checked="true">Milk</li>
                <li data-checked="false">Eggs</li>
                <li data-checked="false">Coffee</li>
            </ul>
        `,
        favorite: false,
        trash: false,
    },
    {
        id: "c47d2f8a-91b3-4a0d-9e65-2b6c4f1a8d90",
        title: "Learning Goals 2025",
        description: "Personal roadmap",
        date: "21 December 2021",
        content: `
            <h2>Goals</h2>
            <ol>
                <li>Master React architecture</li>
                <li>Build backend with Go</li>
                <li>Launch a SaaS</li>
            </ol>
            <p>Stay consistent and ship 🚀</p>
        `,
        favorite: true,
        trash: false,
    },
];

export const loadTrashNotes = async () : Promise<Note[]>  => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mockNotes;
}

export const loadFavoriteNotes = async () : Promise<Note[]>  => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mockNotes;
}

export const loadAllNotes = async () : Promise<Note[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mockNotes;
}