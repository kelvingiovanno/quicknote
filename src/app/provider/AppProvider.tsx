import { RouterProvider } from "react-router"
import { SidebarProvider } from "./sidebar/SidebarProvider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import router from "../routes"

export const AppProvider = () => {
    
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <SidebarProvider>
                <RouterProvider router={router}/>
            </SidebarProvider>
        </QueryClientProvider>
        
    )
}