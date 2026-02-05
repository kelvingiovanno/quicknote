import { createBrowserRouter } from "react-router";

import MainLayout from "@/app/layouts/MainLayout";
import AuthLayout from "@/app/layouts/AuthLayout";

const router = createBrowserRouter([
    
    // Main & Protected Routes

    {
        path: "/",
        Component: MainLayout ,
        hydrateFallbackElement: <p>loading...</p>,
        children: [
            {
                index: true, 
                lazy: async () => {
                    const {default: Dashboard} = await import("@/feature/dashboard/pages/Dashboard");
                    return {Component: Dashboard};
                },
            },
            {
                path: "notes",
                lazy: async () => {
                    const {default: Notes} = await import("@/feature/notes/pages/AllNotesPage");
                    return {Component: Notes};
                },
            },
            {
                path: "favorites",
                lazy: async () => {
                    const {default: Favorites} = await import("@/feature/notes/pages/FavoritNotesPage");
                    return {Component: Favorites};
                },
            },
            {
                path: "trash",
                lazy: async () => {
                    const {default: Trash} = await import("@/feature/notes/pages/TrashNotesPage");
                    return {Component: Trash};
                },
            },
            {
                path: "logout",
                lazy: async () => {
                    const {default: Logout} = await import("@/feature/auth/pages/Logout");
                    return {Component: Logout};
                },
            },
            {
                path: "search-note",
                lazy: async () => {
                    const {default: SearchNote} = await import("@/feature/notes/pages/SearchNotePage");
                    return {Component: SearchNote};
                },
            },
            {
                path: "note", 
                lazy: async () => {
                    const {default: Note} = await import("@/feature/notes/pages/NotePage");
                    return {Component: Note};
                },
            },

        ],
    },

    // Auth Routes

    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "signin",
                lazy: async () => {
                    const {default: SigIn} = await import("@/feature/auth/pages/SignIn");
                    return {Component: SigIn};
                },
            },
            {
                path: "signup",
                lazy: async () => {
                    const {default: SignUp} = await import("@/feature/auth/pages/SignUp");
                    return {Component: SignUp};
                },
            },
        ],
    },

]);

export default router;