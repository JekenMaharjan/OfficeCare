import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
Plus, 
Search, 
Filter, 
Edit,
Trash2,
Eye,
Package
} from "lucide-react";
import { AdminLayout } from "@/components/admin/adminLayout";

const Products = () => {
const products = [
    {
    id: 1,
    name: "Executive Office Chair",
    category: "Furniture",
    price: "$299.99",
    stock: 45,
    status: "active",
    image: "/placeholder.svg"
    },
    {
    id: 2,
    name: "Standing Desk Premium",
    category: "Furniture", 
    price: "$449.99",
    stock: 23,
    status: "active",
    image: "/placeholder.svg"
    },
    {
    id: 3,
    name: "Wireless Mouse Pro",
    category: "Accessories",
    price: "$89.99",
    stock: 5,
    status: "low_stock",
    image: "/placeholder.svg"
    },
    {
    id: 4,
    name: "4K Monitor 27 inch",
    category: "Electronics",
    price: "$399.99",
    stock: 18,
    status: "active",
    image: "/placeholder.svg"
    },
    {
    id: 5,
    name: "Ergonomic Keyboard",
    category: "Accessories",
    price: "$129.99",
    stock: 67,
    status: "active",
    image: "/placeholder.svg"
    },
    {
    id: 6,
    name: "Desk Lamp LED",
    category: "Lighting",
    price: "$59.99",
    stock: 2,
    status: "low_stock",
    image: "/placeholder.svg"
    }
];

const getStatusColor = (status: string, stock: number) => {
    if (status === "low_stock" || stock <= 5) return "destructive";
    if (status === "active") return "default";
    return "secondary";
};

const getStatusText = (status: string, stock: number) => {
    if (stock <= 5) return "Low Stock";
    if (status === "active") return "Active";
    return "Inactive";
};

return (
    <AdminLayout>
        <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
            <div>
            <h1 className="text-3xl font-bold text-foreground">Products</h1>
            <p className="text-muted-foreground">Manage your office appliances inventory</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
            </Button>
        </div>

        {/* Filters and Search */}
        <Card className="shadow-elegant">
            <CardHeader>
            <CardTitle className="text-lg">Product Management</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search products..." className="pl-10" />
                </div>
                <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
                </Button>
            </div>

            {/* Products Table */}
            <div className="rounded-lg border">
                <div className="grid grid-cols-7 gap-4 p-4 bg-muted/50 font-medium text-sm text-muted-foreground border-b">
                <div>Product</div>
                <div>Category</div>
                <div>Price</div>
                <div>Stock</div>
                <div>Status</div>
                <div>Actions</div>
                <div></div>
                </div>
                
                {products.map((product) => (
                <div key={product.id} className="grid grid-cols-7 gap-4 p-4 items-center border-b hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        <Package className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                        <p className="font-medium text-foreground">{product.name}</p>
                        <p className="text-sm text-muted-foreground">ID: #{product.id}</p>
                    </div>
                    </div>
                    
                    <div>
                    <Badge variant="outline">{product.category}</Badge>
                    </div>
                    
                    <div className="font-medium text-foreground">
                    {product.price}
                    </div>
                    
                    <div className="font-medium text-foreground">
                    {product.stock}
                    </div>
                    
                    <div>
                    <Badge variant={getStatusColor(product.status, product.stock)}>
                        {getStatusText(product.status, product.stock)}
                    </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                    </Button>
                    </div>
                    
                    <div></div>
                </div>
                ))}
            </div>
            </CardContent>
        </Card>

        {/* Summary Stats */}
        <div className="grid gap-6 md:grid-cols-3">
            <Card className="shadow-elegant">
            <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-foreground">562</div>
                <p className="text-sm text-muted-foreground">Across all categories</p>
            </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
            <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Low Stock Items</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-destructive">12</div>
                <p className="text-sm text-muted-foreground">Need immediate attention</p>
            </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
            <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Value</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-foreground">$125,450</div>
                <p className="text-sm text-muted-foreground">Current inventory value</p>
            </CardContent>
            </Card>
        </div>
        </div>
    </AdminLayout>
);
};

export default Products;