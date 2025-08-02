import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Search, 
  Filter, 
  Eye,
  Mail,
  Phone,
  MapPin,
  Star,
  TrendingUp
} from "lucide-react";

const Customers = () => {
  const customers = [
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      orders: 12,
      totalSpent: "$2,450.00",
      status: "active",
      joinDate: "2023-08-15",
      lastOrder: "2024-01-15"
    },
    {
      id: 2,
      name: "Sarah Johnson", 
      email: "sarah@example.com",
      phone: "+1 (555) 234-5678",
      location: "Los Angeles, CA",
      orders: 8,
      totalSpent: "$1,890.00",
      status: "active",
      joinDate: "2023-09-22",
      lastOrder: "2024-01-14"
    },
    {
      id: 3,
      name: "Mike Davis",
      email: "mike@example.com", 
      phone: "+1 (555) 345-6789",
      location: "Chicago, IL",
      orders: 15,
      totalSpent: "$3,120.00",
      status: "vip",
      joinDate: "2023-06-10",
      lastOrder: "2024-01-13"
    },
    {
      id: 4,
      name: "Emily Brown",
      email: "emily@example.com",
      phone: "+1 (555) 456-7890", 
      location: "Houston, TX",
      orders: 3,
      totalSpent: "$650.00",
      status: "new",
      joinDate: "2024-01-05",
      lastOrder: "2024-01-12"
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david@example.com",
      phone: "+1 (555) 567-8901",
      location: "Phoenix, AZ", 
      orders: 6,
      totalSpent: "$1,280.00",
      status: "active",
      joinDate: "2023-11-18",
      lastOrder: "2024-01-11"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "vip": return "default";
      case "active": return "secondary";
      case "new": return "outline";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    if (status === "vip") return <Star className="h-3 w-3" />;
    return null;
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Customers</h1>
          <p className="text-muted-foreground">Manage your customer relationships</p>
        </div>
        <Button variant="outline">
          <Mail className="mr-2 h-4 w-4" />
          Send Newsletter
        </Button>
      </div>

      {/* Customer Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="shadow-elegant">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">3,240</div>
            <p className="text-sm text-green-600 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +15.3% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">VIP Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">124</div>
            <p className="text-sm text-muted-foreground">High-value customers</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">89</div>
            <p className="text-sm text-muted-foreground">New registrations</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Order Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">$285</div>
            <p className="text-sm text-muted-foreground">Per customer</p>
          </CardContent>
        </Card>
      </div>

      {/* Customer Management */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="text-lg">Customer Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search customers..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          {/* Customers Table */}
          <div className="rounded-lg border">
            <div className="grid grid-cols-8 gap-4 p-4 bg-muted/50 font-medium text-sm text-muted-foreground border-b">
              <div>Customer</div>
              <div>Contact</div>
              <div>Location</div>
              <div>Orders</div>
              <div>Total Spent</div>
              <div>Status</div>
              <div>Last Order</div>
              <div>Actions</div>
            </div>
            
            {customers.map((customer) => (
              <div key={customer.id} className="grid grid-cols-8 gap-4 p-4 items-center border-b hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {getInitials(customer.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{customer.name}</p>
                    <p className="text-sm text-muted-foreground">ID: #{customer.id}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-foreground flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    {customer.email}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Phone className="h-3 w-3" />
                    {customer.phone}
                  </p>
                </div>
                
                <div className="text-sm text-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {customer.location}
                </div>
                
                <div className="font-medium text-foreground">{customer.orders}</div>
                
                <div className="font-medium text-foreground">{customer.totalSpent}</div>
                
                <div>
                  <Badge variant={getStatusColor(customer.status)} className="flex items-center gap-1 w-fit">
                    {getStatusIcon(customer.status)}
                    {customer.status.toUpperCase()}
                  </Badge>
                </div>
                
                <div className="text-sm text-muted-foreground">{customer.lastOrder}</div>
                
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

export default Customers;