import { SidebarProvider } from "./sidebar/SidebarProvider"

export const AppProvider = ({
    children
} : {children: React.ReactNode}) => {
    
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}