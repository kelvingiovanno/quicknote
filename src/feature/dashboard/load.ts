import type { Note } from "../notes/types";

const mockNotes: Note[] = [
    {
        title: "Meeting Notes",
        description: "Summary of project kickoff meeting",
        date: new Date("2024-12-01"),
        slug: "meeting-notes",
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
        title: "React Architecture Ideas",
        description: "Feature-based folder structure thoughts",
        date: new Date("2024-12-03"),
        slug: "react-architecture-ideas",
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
        title: "Shopping List",
        description: "Things to buy this weekend",
        date: new Date("2024-11-28"),
        slug: "shopping-list",
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
        title: "Learning Goals 2025",
        description: "Personal roadmap",
        date: new Date("2024-12-05"),
        slug: "learning-goals-2025",
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

export const getAllRecentNotesMock = async (delay: number): Promise<Note[]> => {
    await new Promise((resolve) => setTimeout(resolve, delay));;
    return mockNotes;
};