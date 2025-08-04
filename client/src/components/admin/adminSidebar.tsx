"use client"
import { useState } from "react";
import { 
LayoutDashboard, 
Package, 
ShoppingCart, 
Users, 
BarChart3, 
Settings,
Building2, 
} from "lucide-react";

import Link from "next/link";


import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupContent,
SidebarGroupLabel,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
SidebarTrigger,
useSidebar,
SidebarHeader,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

const navigationItems = [
{ title: "Dashboard", url: "/admin", icon: LayoutDashboard },
{ title: "Products", url: "/admin/products", icon: Package },
{ title: "Orders", url: "/admin/orders", icon: ShoppingCart },
{ title: "Customers", url: "/admin/customers", icon: Users },
{ title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
{ title: "Settings", url: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
const { state } = useSidebar();
const pathname = usePathname();
// const currentPath = location.pathname;
const currentPath = pathname;

const collapsed = state === "collapsed";

const isActive = (path: string) => {
    if (path === "/admin") {
    return currentPath === "/admin";
    }
    return currentPath.startsWith(path);
};

const getNavClass = (path: string) => {
    return isActive(path) 
    ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90" 
    : "hover:bg-sidebar-accent/50 text-sidebar-foreground";
};

return (
    <Sidebar
    className={`${collapsed ? "w-16" : "w-64"} border-r border-sidebar-border transition-all duration-300`}
    collapsible="icon"
    >
    <SidebarHeader className="border-b border-sidebar-border p-4">
        {!collapsed && (
        <div className="flex items-center gap-2 text-sidebar-foreground">
            <Building2 className="h-8 w-8" />
            <div>
                <h2 className="text-lg font-bold">Office Care</h2>
                <p className="text-sm opacity-80">Admin Panel</p>
            </div>
        </div>
        )}
        {collapsed && (
        <div className="flex justify-center">
            <Building2 className="h-8 w-8 text-sidebar-foreground" />
        </div>
        )}
    </SidebarHeader>

    <SidebarContent>
        <SidebarGroup>
        <SidebarGroupLabel className="text-sidebar-foreground/70 uppercase text-xs font-semibold tracking-wider">
            {!collapsed && "Navigation"}
        </SidebarGroupLabel>
        <SidebarGroupContent>
            <SidebarMenu>
            {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                    <Link 
                    href={item.url} 
                    className={`${getNavClass(item.url)} flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200`}
                    title={collapsed ? item.title : undefined}
                    >
                    <item.icon className="h-5 w-5 shrink-0" />
                    {!collapsed && <span className="font-medium">{item.title}</span>}
                    </Link>
                </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
            </SidebarMenu>
        </SidebarGroupContent>
        </SidebarGroup>
    </SidebarContent>
    </Sidebar>
);
}