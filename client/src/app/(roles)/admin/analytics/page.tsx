import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
TrendingUp, 
TrendingDown,
Download,
Calendar,
DollarSign,
ShoppingCart,
Users,
Package
} from "lucide-react";
import { AdminLayout } from "@/components/admin/adminLayout";

const Analytics = () => {
const salesData = [
    { month: "Jan", revenue: 12000, orders: 145 },
    { month: "Feb", revenue: 15000, orders: 178 },
    { month: "Mar", revenue: 18000, orders: 210 },
    { month: "Apr", revenue: 22000, orders: 245 },
    { month: "May", revenue: 25000, orders: 289 },
    { month: "Jun", revenue: 28000, orders: 312 }
];

const topProducts = [
    { name: "Executive Office Chair", sales: 145, revenue: "$43,350" },
    { name: "Standing Desk Premium", sales: 89, revenue: "$40,050" },
    { name: "4K Monitor 27 inch", sales: 67, revenue: "$26,800" },
    { name: "Ergonomic Keyboard", sales: 112, revenue: "$14,560" },
    { name: "Wireless Mouse Pro", sales: 98, revenue: "$8,820" }
];

const topCategories = [
    { category: "Furniture", percentage: 45, revenue: "$135,000" },
    { category: "Electronics", percentage: 30, revenue: "$90,000" },
    { category: "Accessories", percentage: 20, revenue: "$60,000" },
    { category: "Lighting", percentage: 5, revenue: "$15,000" }
];

return (
    <div className="space-y-6">
        <AdminLayout>
    {/* Header */}
    <div className="flex items-center justify-between">
        <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">Track your business performance and insights</p>
        </div>
        <div className="flex gap-2">
        <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 Days
        </Button>
        <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
        </Button>
        </div>
    </div>

    {/* Key Metrics */}
    <div className="grid gap-6 md:grid-cols-4">
        <Card className="shadow-elegant">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold text-foreground">$45,250</div>
            <p className="text-sm text-green-600 flex items-center">
            <TrendingUp className="mr-1 h-3 w-3" />
            +12.5% from last month
            </p>
        </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
            <ShoppingCart className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold text-foreground">3.24%</div>
            <p className="text-sm text-green-600 flex items-center">
            <TrendingUp className="mr-1 h-3 w-3" />
            +0.8% from last month
            </p>
        </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Order Value</CardTitle>
            <Package className="h-4 w-4 text-purple-600" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold text-foreground">$285</div>
            <p className="text-sm text-red-600 flex items-center">
            <TrendingDown className="mr-1 h-3 w-3" />
            -2.1% from last month
            </p>
        </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Customer Retention</CardTitle>
            <Users className="h-4 w-4 text-orange-600" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold text-foreground">68.5%</div>
            <p className="text-sm text-green-600 flex items-center">
            <TrendingUp className="mr-1 h-3 w-3" />
            +5.2% from last month
            </p>
        </CardContent>
        </Card>
    </div>

    {/* Charts Section */}
    <div className="grid gap-6 lg:grid-cols-2">
        {/* Revenue Chart */}
        <Card className="shadow-elegant">
        <CardHeader>
            <CardTitle className="text-foreground">Revenue Trend</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
            {salesData.map((item, index) => (
                <div key={item.month} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="font-medium text-foreground">{item.month}</span>
                </div>
                <div className="text-right">
                    <p className="font-medium text-foreground">${item.revenue.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{item.orders} orders</p>
                </div>
                </div>
            ))}
            </div>
        </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="shadow-elegant">
        <CardHeader>
            <CardTitle className="text-foreground">Top Selling Products</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
            {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                    </div>
                    <div>
                    <p className="font-medium text-foreground">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.sales} units sold</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="font-medium text-foreground">{product.revenue}</p>
                </div>
                </div>
            ))}
            </div>
        </CardContent>
        </Card>
    </div>

    {/* Category Performance */}
    <Card className="shadow-elegant">
        <CardHeader>
        <CardTitle className="text-foreground">Category Performance</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {topCategories.map((category) => (
            <div key={category.category} className="space-y-3">
                <div className="flex items-center justify-between">
                <h3 className="font-medium text-foreground">{category.category}</h3>
                <Badge variant="outline">{category.percentage}%</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${category.percentage}%` }}
                ></div>
                </div>
                <p className="text-sm text-muted-foreground">Revenue: {category.revenue}</p>
            </div>
            ))}
        </div>
        </CardContent>
    </Card>

    {/* Quick Stats */}
    <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-elegant">
        <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Website Traffic</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold text-foreground">24,580</div>
            <p className="text-sm text-green-600">+18.2% this month</p>
        </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
        <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Page Views</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold text-foreground">98,240</div>
            <p className="text-sm text-green-600">+22.1% this month</p>
        </CardContent>
        </Card>
        
        <Card className="shadow-elegant">
        <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Bounce Rate</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold text-foreground">24.5%</div>
            <p className="text-sm text-red-600">+2.3% this month</p>
        </CardContent>
        </Card>
    </div>
    </AdminLayout>
    </div>
);
};

export default Analytics;