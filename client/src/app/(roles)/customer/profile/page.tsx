import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Edit, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { CustomerLayout } from "@/components/customer/customerLayout";

const Profile = () => {
  return (
    <CustomerLayout>
        <div className="p-6 space-y-6">
        <div>
            <h1 className="text-3xl font-bold text-foreground">Profile</h1>
            <p className="text-muted-foreground">Manage your account information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Overview */}
            <Card className="lg:col-span-1">
            <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground">JD</AvatarFallback>
                </Avatar>
                </div>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>Premium Customer</CardDescription>
                <Badge className="w-fit mx-auto bg-primary text-primary-foreground">
                VIP Member
                </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">New York, NY</span>
                </div>
                <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Member since 2022</span>
                </div>
            </CardContent>
            </Card>

            {/* Personal Information */}
            <Card className="lg:col-span-2">
            <CardHeader>
                <div className="flex items-center justify-between">
                <div>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                </div>
                <Button variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                </div>
                </div>
                
                <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                
                <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <Input id="company" defaultValue="Tech Solutions Inc." />
                </div>
                
                <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title (Optional)</Label>
                <Input id="jobTitle" defaultValue="Office Manager" />
                </div>

                <Button className="w-full md:w-auto">
                Save Changes
                </Button>
            </CardContent>
            </Card>
        </div>

        {/* Account Statistics */}
        <Card>
            <CardHeader>
            <CardTitle>Account Statistics</CardTitle>
            <CardDescription>Your activity overview</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                <div className="text-2xl font-bold text-primary">24</div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                </div>
                <div className="text-center">
                <div className="text-2xl font-bold text-primary">$2,459.87</div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                </div>
                <div className="text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <p className="text-sm text-muted-foreground">Wishlist Items</p>
                </div>
                <div className="text-center">
                <div className="text-2xl font-bold text-primary">Gold</div>
                <p className="text-sm text-muted-foreground">Loyalty Tier</p>
                </div>
            </div>
            </CardContent>
        </Card>
        </div>
    </CustomerLayout>
  );
};

export default Profile;