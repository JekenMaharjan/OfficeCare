import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Package, Truck, CheckCircle } from "lucide-react";
import { CustomerLayout } from "@/components/customer/customerLayout";

const Orders = () => {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: "$245.99",
      items: [
        { name: "Ergonomic Office Chair", quantity: 1, price: "$199.99" },
        { name: "LED Desk Lamp", quantity: 1, price: "$45.99" }
      ],
      tracking: "TRK123456789"
    },
    {
      id: "ORD-002",
      date: "2024-01-20",
      status: "Processing",
      total: "$29.99",
      items: [
        { name: "Printer Paper A4 (5 packs)", quantity: 1, price: "$29.99" }
      ],
      tracking: "TRK987654321"
    },
    {
      id: "ORD-003",
      date: "2024-01-18",
      status: "Shipped",
      total: "$399.99",
      items: [
        { name: "Height Adjustable Standing Desk", quantity: 1, price: "$399.99" }
      ],
      tracking: "TRK456789123"
    },
    {
      id: "ORD-004",
      date: "2024-01-10",
      status: "Delivered",
      total: "$89.97",
      items: [
        { name: "Wireless Mouse", quantity: 2, price: "$24.99" },
        { name: "Mechanical Keyboard", quantity: 1, price: "$39.99" }
      ],
      tracking: "TRK789123456"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing':
        return <Package className="h-4 w-4" />;
      case 'Shipped':
        return <Truck className="h-4 w-4" />;
      case 'Delivered':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing':
        return 'bg-orange-100 text-orange-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <CustomerLayout>
        <div className="p-6 space-y-6">
        <div>
            <h1 className="text-3xl font-bold text-foreground">My Orders</h1>
            <p className="text-muted-foreground">Track and manage your order history</p>
        </div>

        <div className="space-y-4">
            {orders.map((order) => (
            <Card key={order.id}>
                <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                    <CardTitle className="text-lg">{order.id}</CardTitle>
                    <CardDescription>Ordered on {new Date(order.date).toLocaleDateString()}</CardDescription>
                    </div>
                    <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(order.status)}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1">{order.status}</span>
                    </Badge>
                    <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                    </Button>
                    </div>
                </div>
                </CardHeader>
                <CardContent>
                <div className="space-y-3">
                    {order.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                        <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-medium">{item.price}</p>
                    </div>
                    ))}
                    <div className="flex items-center justify-between pt-3 border-t">
                    <div>
                        <p className="text-sm text-muted-foreground">Tracking: {order.tracking}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold">Total: {order.total}</p>
                    </div>
                    </div>
                </div>
                </CardContent>
            </Card>
            ))}
        </div>
        </div>
    </CustomerLayout>
  );
};

export default Orders;