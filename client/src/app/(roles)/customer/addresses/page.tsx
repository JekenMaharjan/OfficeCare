import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Home, Building } from "lucide-react";
import { CustomerLayout } from "@/components/customer/customerLayout";

const Addresses = () => {
  const addresses = [
    {
      id: 1,
      type: "Home",
      isDefault: true,
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
      phone: "+1 (555) 123-4567"
    },
    {
      id: 2,
      type: "Office",
      isDefault: false,
      name: "John Doe",
      street: "456 Business Ave, Suite 200",
      city: "New York", 
      state: "NY",
      zipCode: "10002",
      country: "United States",
      phone: "+1 (555) 987-6543"
    }
  ];

  return (
    <CustomerLayout>
        <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
            <div>
            <h1 className="text-3xl font-bold text-foreground">Addresses</h1>
            <p className="text-muted-foreground">Manage your shipping and billing addresses</p>
            </div>
            <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Address
            </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addresses.map((address) => (
            <Card key={address.id} className="relative">
                <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                    {address.type === "Home" ? (
                        <Home className="h-5 w-5 text-primary" />
                    ) : (
                        <Building className="h-5 w-5 text-primary" />
                    )}
                    <CardTitle className="text-lg">{address.type} Address</CardTitle>
                    </div>
                    {address.isDefault && (
                    <Badge variant="secondary">Default</Badge>
                    )}
                </div>
                </CardHeader>
                <CardContent className="space-y-4">
                <div>
                    <p className="font-medium">{address.name}</p>
                    <p className="text-sm text-muted-foreground">{address.street}</p>
                    <p className="text-sm text-muted-foreground">
                    {address.city}, {address.state} {address.zipCode}
                    </p>
                    <p className="text-sm text-muted-foreground">{address.country}</p>
                    <p className="text-sm text-muted-foreground">{address.phone}</p>
                </div>
                
                <div className="flex gap-2 pt-4 border-t">
                    <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                    </Button>
                    {!address.isDefault && (
                    <Button variant="outline" size="sm">
                        Set as Default
                    </Button>
                    )}
                    <Button variant="outline" size="sm" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
                </CardContent>
            </Card>
            ))}
            
            {/* Add New Address Card */}
            <Card className="border-dashed border-2 border-muted-foreground/25 hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center h-full min-h-[200px] text-center">
                <Plus className="h-12 w-12 text-muted-foreground mb-4" />
                <CardTitle className="text-lg text-muted-foreground">Add New Address</CardTitle>
                <CardDescription className="mt-2">
                Click to add a new shipping or billing address
                </CardDescription>
            </CardContent>
            </Card>
        </div>
        </div>
    </CustomerLayout>
  );
};

export default Addresses;