import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp,
  DollarSign,
  Eye,
  AlertCircle,
  CheckCircle
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,250",
      change: "+12.5%",
      icon: DollarSign,
      trend: "up",
      color: "text-green-600"
    },
    {
      title: "Total Orders",
      value: "1,248",
      change: "+8.2%",
      icon: ShoppingCart,
      trend: "up",
      color: "text-blue-600"
    },
    {
      title: "Total Products",
      value: "562",
      change: "+3.1%",
      icon: Package,
      trend: "up",
      color: "text-purple-600"
    },
    {
      title: "Active Customers",
      value: "3,240",
      change: "+15.3%",
      icon: Users,
      trend: "up",
      color: "text-orange-600"
    }
  ];

  const recentOrders = [
    { id: "#ORD-001", customer: "John Smith", product: "Office Chair Executive", amount: "$299", status: "completed" },
    { id: "#ORD-002", customer: "Sarah Johnson", product: "Standing Desk Premium", amount: "$450", status: "pending" },
    { id: "#ORD-003", customer: "Mike Davis", product: "Wireless Mouse Set", amount: "$89", status: "completed" },
    { id: "#ORD-004", customer: "Emily Brown", product: "Monitor 27 inch 4K", amount: "$399", status: "processing" },
    { id: "#ORD-005", customer: "David Wilson", product: "Ergonomic Keyboard", amount: "$129", status: "completed" }
  ];

  const lowStock = [
    { name: "Wireless Mouse Pro", stock: 5, category: "Accessories" },
    { name: "Office Chair Standard", stock: 3, category: "Furniture" },
    { name: "USB-C Hub", stock: 8, category: "Electronics" },
    { name: "Desk Lamp LED", stock: 2, category: "Lighting" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening at Office Care.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Eye className="mr-2 h-4 w-4" />
          View Store
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="mr-1 h-3 w-3 text-green-600" />
                {stat.change} from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Orders */}
        <Card className="lg:col-span-2 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Orders</CardTitle>
            <CardDescription>Latest orders from your customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm font-medium text-foreground">{order.id}</p>
                      <p className="text-xs text-muted-foreground">{order.customer}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{order.amount}</p>
                    <Badge 
                      variant={order.status === "completed" ? "default" : 
                              order.status === "pending" ? "secondary" : "outline"}
                      className="mt-1"
                    >
                      {order.status === "completed" && <CheckCircle className="mr-1 h-3 w-3" />}
                      {order.status === "pending" && <AlertCircle className="mr-1 h-3 w-3" />}
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-orange-500" />
              Low Stock Alert
            </CardTitle>
            <CardDescription>Products that need restocking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStock.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.category}</p>
                  </div>
                  <Badge variant="destructive" className="text-xs">
                    {item.stock} left
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Products
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;