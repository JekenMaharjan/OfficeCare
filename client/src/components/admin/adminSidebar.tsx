import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Package, Users, ShoppingCart, LogOut } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const adminNavItems = [
    { title: "Dashboard", url: "/admin/adminDashboard", icon: LayoutDashboard },
    { title: "Products", url: "/admin/productsPage", icon: Package },
    { title: "Customers", url: "/admin/customersPage", icon: Users },
    { title: "Orders", url: "/admin/ordersPage", icon: ShoppingCart },
]

export function AdminSidebar() {
    const { state } = useSidebar()
    const pathname = usePathname()


    const handleLogout = () => {
        // TODO: Implement logout functionality with backend
        console.log("Logout clicked")
    }

    return (
        <Sidebar
        className={`border-r-1 border-gray-500 ${state === "collapsed" ? "w-14" : "w-60"}`} 
        collapsible="icon"
        >
            <SidebarContent className="bg-gradient-to-b from-blue-300 to-red-300">
                <div className="p-2 flex flex-col items-center justify-center">
                    <img className={`h-20 w-20 ${state === "collapsed" ? "hidden" : "block"}`} src="/OfficeCareLogo.png" alt="Office Care Logo" />
                    <h2 className={`flex flex-col items-center justify-center font-bold text-3xl text-blue-500 ${state === "collapsed" ? "hidden" : "block"}`}>
                        Office Care 
                        <p>Admin</p>
                    </h2>
                </div>
                
                <SidebarGroup>
                    <SidebarGroupLabel className="text-gray-500">Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {adminNavItems.map((item) => {
                            const isActive = pathname === item.url
                            return (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                <Link
                                    href={item.url}
                                    className={`flex items-centera text-gray-600 gap-2 p-2 rounded-md transition-colors ${
                                    isActive
                                        ? "bg-slate-700 text-primary-foreground"
                                        : "hover:bg-accent hover:text-accent-foreground"
                                    }`}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {state !== "collapsed" && <span>{item.title}</span>}
                                </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            )
                        })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <div className="mt-auto p-4">
                    <SidebarMenuButton onClick={handleLogout} className="w-full justify-start cursor-pointer">
                        <LogOut className="h-4 w-4" />
                        {state !== "collapsed" && <span>Logout</span>}
                    </SidebarMenuButton>
                </div>
            </SidebarContent>
        </Sidebar>
    )
}