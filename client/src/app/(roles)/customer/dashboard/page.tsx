import { CustomerLayout } from "@/components/customer/customerLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Package, Heart, User } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Orders",
      value: "12",
      description: "Orders placed this year",
      icon: ShoppingBag,
      iconColor: "text-primary"
    },
    {
      title: "Pending Orders",
      value: "2",
      description: "Orders being processed",
      icon: Package,
      iconColor: "text-orange-500"
    },
    {
      title: "Wishlist Items",
      value: "8",
      description: "Items saved for later",
      icon: Heart,
      iconColor: "text-red-500"
    },
    {
      title: "Account Age",
      value: "2 years",
      description: "Member since 2022",
      icon: User,
      iconColor: "text-green-500"
    }
  ];

  const recentOrders = [
    {
      id: "ORD-001",
      items: "Office Chair + Desk Lamp",
      total: "$245.99",
      status: "Delivered",
      date: "2024-01-15"
    },
    {
      id: "ORD-002", 
      items: "Printer Paper (5 packs)",
      total: "$29.99",
      status: "Processing",
      date: "2024-01-20"
    },
    {
      id: "ORD-003",
      items: "Standing Desk",
      total: "$399.99", 
      status: "Shipped",
      date: "2024-01-18"
    }
  ];

  return (
    <CustomerLayout>
        <div className="p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-foreground">Welcome back!</h1>
                <p className="text-muted-foreground">Here's what's happening with your account</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                <Card key={stat.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className={`h-4 w-4 ${stat.iconColor}`} />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                    </CardContent>
                </Card>
                ))}
            </div>

            {/* Recent Orders */}
            <Card>
                <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Your latest order activity</CardDescription>
                </CardHeader>
                <CardContent>
                <div className="space-y-4">
                    {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.items}</p>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="text-right space-y-1">
                        <p className="font-medium">{order.total}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'Processing' ? 'bg-orange-100 text-orange-800' :
                            'bg-blue-100 text-blue-800'
                        }`}>
                            {order.status}
                        </span>
                        </div>
                    </div>
                    ))}
                </div>
                </CardContent>
            </Card>
        
        </div>
    </CustomerLayout>
  );
};

export default Dashboard;