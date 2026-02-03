import { createBrowserRouter } from "react-router";

import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";

const Router = createBrowserRouter([
    
    // Main Routes

    {
        path: "/",
        Component: MainLayout ,
        children: [
            {
                index: true,
                lazy: async () => {
                    const {default: Dashboard} = await import("@/pages/main/Dashboard");
                    return {Component: Dashboard};
                },

            },
            {
                path: "notes",
                lazy: async () => {
                    const {default: Notes} = await import("@/pages/main/Notes");
                    return {Component: Notes};
                },
            },
            {
                path: "favorites",
                lazy: async () => {
                    const {default: Favorites} = await import("@/pages/main/Favorites");
                    return {Component: Favorites};
                },
            },
            {
                path: "trash",
                lazy: async () => {
                    const {default: Trash} = await import("@/pages/main/Trash");
                    return {Component: Trash};
                },
            },
            {
                path: "logout",
                lazy: async () => {
                    const {default: Logout} = await import("@/pages/main/Logout");
                    return {Component: Logout};
                },
            },
            {
                path: "search-note",
                lazy: async () => {
                    const {default: SearchNote} = await import("@/pages/main/SearchNote");
                    return {Component: SearchNote};
                },
            },
            {
                path: "note", 
                lazy: async () => {
                    const {default: Note} = await import("@/pages/main/Note");
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
                    const {default: SigIn} = await import("@/pages/auth/SignIn");
                    return {Component: SigIn};
                },
            },
            {
                path: "signup",
                lazy: async () => {
                    const {default: SignUp} = await import("@/pages/auth/SignUp");
                    return {Component: SignUp};
                },
            },
        ],
    },

]);

export default Router;