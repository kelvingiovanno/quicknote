import { createBrowserRouter } from "react-router";

import MainLayout from "@/app/layouts/MainLayout";
import AuthLayout from "@/app/layouts/AuthLayout";

const router = createBrowserRouter([
    
    // Main Routes

    {
        path: "/",
        Component: MainLayout ,
        children: [
            {
                index: true, 
                lazy: async () => {
                    const {default: Dashboard} = await import("@/backup/_pages/main/Dashboard");
                    return {Component: Dashboard};
                },

            },
            {
                path: "notes",
                lazy: async () => {
                    const {default: Notes} = await import("@/backup/_pages/main/Notes");
                    return {Component: Notes};
                },
            },
            {
                path: "favorites",
                lazy: async () => {
                    const {default: Favorites} = await import("@/backup/_pages/main/Favorites");
                    return {Component: Favorites};
                },
            },
            {
                path: "trash",
                lazy: async () => {
                    const {default: Trash} = await import("@/backup/_pages/main/Trash");
                    return {Component: Trash};
                },
            },
            {
                path: "logout",
                lazy: async () => {
                    const {default: Logout} = await import("@/backup/_pages/main/Logout");
                    return {Component: Logout};
                },
            },
            {
                path: "search-note",
                lazy: async () => {
                    const {default: SearchNote} = await import("@/backup/_pages/main/SearchNote");
                    return {Component: SearchNote};
                },
            },
            {
                path: "note", 
                lazy: async () => {
                    const {default: Note} = await import("@/backup/_pages/main/Note");
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
                    const {default: SigIn} = await import("@/backup/_pages/auth/SignIn");
                    return {Component: SigIn};
                },
            },
            {
                path: "signup",
                lazy: async () => {
                    const {default: SignUp} = await import("@/backup/_pages/auth/SignUp");
                    return {Component: SignUp};
                },
            },
        ],
    },

]);

export default router;