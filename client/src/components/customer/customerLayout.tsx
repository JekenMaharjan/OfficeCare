"use client"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { CustomerSidebar } from "@/components/customer/customerSidebar";

interface CustomerLayoutProps {
children: React.ReactNode;
}

export function CustomerLayout({ children }: CustomerLayoutProps) {
return (
    <SidebarProvider>
    <div className="min-h-screen flex w-full bg-background">
        <CustomerSidebar />
        <SidebarInset>
        {/* Header */}
        <header className="h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
            <div className="flex items-center justify-between px-4 h-full">
            <div className="flex items-center gap-2">
                <SidebarTrigger />
                <div className="h-6 w-px bg-border" />
                <h2 className="font-semibold text-foreground">OfficeCare Customer Panel</h2>
            </div>
            <div className="flex items-center gap-2">
                <div className="text-sm text-muted-foreground">
                Welcome back, John!
                </div>
            </div>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
            {children}
        </main>
        </SidebarInset>
    </div>
    </SidebarProvider>
);
}