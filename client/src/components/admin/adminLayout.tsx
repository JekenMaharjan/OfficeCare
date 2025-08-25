import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AdminSidebar } from "./adminSidebar"

interface AdminLayoutProps {
    children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <SidebarProvider>
            <div className="min-h-screen flex w-full">
                <AdminSidebar/>
                <div className="flex-1 flex flex-col">
                    <header className="h-16 bg-gradient-to-r from-blue-300 to-red-300 flex items-center px-10 ml-[-16]">
                        <SidebarTrigger className="cursor-pointer" />
                        <div className="ml-4">
                            <h1 className="text-xl font-semibold">Admin Panel</h1>
                        </div>
                    </header>
                    <main className="flex-1 p-6 bg-muted/20">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}