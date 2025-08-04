    "use client";
    import { 
    Home, 
    ShoppingBag, 
    User, 
    MapPin, 
    Heart, 
    HelpCircle,
    Settings,
    LogOut
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
    SidebarHeader,
    useSidebar,
    } from "@/components/ui/sidebar";
    import { usePathname } from "next/navigation";
    import { Building2 } from "lucide-react";

    const menuItems = [
    { title: "Dashboard", url: "/customer/dashboard", icon: Home },
    { title: "Orders", url: "/customer/orders", icon: ShoppingBag },
    { title: "Profile", url: "/customer/profile", icon: User },
    { title: "Addresses", url: "/customer/addresses", icon: MapPin },
    { title: "Wishlist", url: "/customer/wishlist", icon: Heart },
    { title: "Help & Support", url: "/customer/support", icon: HelpCircle },
    ];

    const accountItems = [
    { title: "Settings", url: "/customer/settings", icon: Settings },
    { title: "Logout", url: "/customer/logout", icon: LogOut },
    ];

    export function CustomerSidebar() {
    const { state } = useSidebar();
    const pathname = usePathname();
    const currentPath = pathname;
    const collapsed = state === "collapsed";

    const isActive = (path: string) => currentPath === path;

    const getNavClass = (path: string) =>
        isActive(path)
        ? "bg-primary text-primary-foreground hover:bg-primary/90"
        : "hover:bg-secondary/50 text-foreground";

    return (
        <Sidebar
        className={`${collapsed ? "w-16" : "w-64"} border-r border-border transition-all duration-300`}
        collapsible="icon"
        >
        <SidebarHeader className="border-b border-border p-4">
            {!collapsed ? (
            <div className="flex items-center gap-2 text-foreground">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">OC</span>
                </div>
                <div>
                <h2 className="text-lg font-bold">OfficeCare</h2>
                <p className="text-sm opacity-80">Customer Panel</p>
                </div>
            </div>
            ) : (
            <div className="flex justify-center">
                <Building2 className="h-8 w-8 text-foreground" />
            </div>
            )}
        </SidebarHeader>

        <SidebarContent>
            {/* Main Navigation */}
            <SidebarGroup>
            <SidebarGroupLabel className="text-muted-foreground/70 uppercase text-xs font-semibold tracking-wider">
                {!collapsed && "Main Menu"}
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                {menuItems.map((item) => (
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

            {/* Account Navigation */}
            <SidebarGroup>
            <SidebarGroupLabel className="text-muted-foreground/70 uppercase text-xs font-semibold tracking-wider">
                {!collapsed && "Account"}
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                {accountItems.map((item) => (
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
