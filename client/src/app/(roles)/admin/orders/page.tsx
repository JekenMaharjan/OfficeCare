import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Eye,
  Download,
  CheckCircle,
  Clock,
  Truck,
  AlertCircle
} from "lucide-react";

const Orders = () => {
  const orders = [
    {
      id: "#ORD-001",
      customer: "John Smith",
      email: "john@example.com",
      products: ["Executive Office Chair", "Desk Lamp LED"],
      total: "$359.98",
      status: "completed",
      date: "2024-01-15",
      payment: "paid"
    },
    {
      id: "#ORD-002", 
      customer: "Sarah Johnson",
      email: "sarah@example.com",
      products: ["Standing Desk Premium", "Monitor 4K"],
      total: "$849.98",
      status: "processing",
      date: "2024-01-14",
      payment: "paid"
    },
    {
      id: "#ORD-003",
      customer: "Mike Davis",
      email: "mike@example.com", 
      products: ["Wireless Mouse Pro", "Ergonomic Keyboard"],
      total: "$219.98",
      status: "shipped",
      date: "2024-01-13",
      payment: "paid"
    },
    {
      id: "#ORD-004",
      customer: "Emily Brown",
      email: "emily@example.com",
      products: ["Office Chair Standard"],
      total: "$199.99",
      status: "pending",
      date: "2024-01-12",
      payment: "pending"
    },
    {
      id: "#ORD-005",
      customer: "David Wilson", 
      email: "david@example.com",
      products: ["USB-C Hub", "Desk Organizer"],
      total: "$89.98",
      status: "completed",
      date: "2024-01-11",
      payment: "paid"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4" />;
      case "processing": return <Clock className="h-4 w-4" />;
      case "shipped": return <Truck className="h-4 w-4" />;
      case "pending": return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "default";
      case "processing": return "secondary"; 
      case "shipped": return "outline";
      case "pending": return "destructive";
      default: return "secondary";
    }
  };

  const getPaymentColor = (payment: string) => {
    return payment === "paid" ? "default" : "destructive";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Orders</h1>
          <p className="text-muted-foreground">Track and manage customer orders</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Orders
        </Button>
      </div>

      {/* Order Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="shadow-elegant">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1,248</div>
            <p className="text-sm text-green-600">+8.2% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">23</div>
            <p className="text-sm text-muted-foreground">Awaiting processing</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Shipped Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">15</div>
            <p className="text-sm text-muted-foreground">Out for delivery</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Revenue Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">$2,450</div>
            <p className="text-sm text-muted-foreground">From 18 orders</p>
          </CardContent>
        </Card>
      </div>

      {/* Orders Management */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="text-lg">Order Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search orders..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          {/* Orders Table */}
          <div className="rounded-lg border">
            <div className="grid grid-cols-8 gap-4 p-4 bg-muted/50 font-medium text-sm text-muted-foreground border-b">
              <div>Order ID</div>
              <div>Customer</div>
              <div>Products</div>
              <div>Total</div>
              <div>Status</div>
              <div>Payment</div>
              <div>Date</div>
              <div>Actions</div>
            </div>
            
            {orders.map((order) => (
              <div key={order.id} className="grid grid-cols-8 gap-4 p-4 items-center border-b hover:bg-accent/50 transition-colors">
                <div className="font-medium text-primary">{order.id}</div>
                
                <div>
                  <p className="font-medium text-foreground">{order.customer}</p>
                  <p className="text-sm text-muted-foreground">{order.email}</p>
                </div>
                
                <div>
                  <p className="text-sm text-foreground">{order.products[0]}</p>
                  {order.products.length > 1 && (
                    <p className="text-xs text-muted-foreground">+{order.products.length - 1} more</p>
                  )}
                </div>
                
                <div className="font-medium text-foreground">{order.total}</div>
                
                <div>
                  <Badge variant={getStatusColor(order.status)} className="flex items-center gap-1 w-fit">
                    {getStatusIcon(order.status)}
                    {order.status}
                  </Badge>
                </div>
                
                <div>
                  <Badge variant={getPaymentColor(order.payment)}>
                    {order.payment}
                  </Badge>
                </div>
                
                <div className="text-sm text-muted-foreground">{order.date}</div>
                
                <div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Orders;