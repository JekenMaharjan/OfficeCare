"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { User, Package, MapPin, CreditCard } from "lucide-react"
import { toast } from "sonner"

// TODO: Replace with actual user data from backend/auth context
const mockUser = {
  id: 1,
  name: "John Doe",
  email: "john.doe@email.com",
  phone: "+1 234 567 8900",
  avatar: "/placeholder.svg",
  joinDate: "2024-01-15"
}

const mockOrders = [
  {
    id: "12345",
    date: "2024-01-15",
    total: 299.99,
    status: "Delivered",
    items: 3
  },
  {
    id: "12346",
    date: "2024-01-10",
    total: 150.00,
    status: "Shipped",
    items: 2
  }
]

const mockAddresses = [
  {
    id: 1,
    type: "Home",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    isDefault: true
  },
  {
    id: 2,
    type: "Work",
    address: "456 Office Blvd",
    city: "New York",
    state: "NY",
    zipCode: "10002",
    isDefault: false
  }
]

export default function Profile() {
  const [user, setUser] = useState(mockUser)
  const [orders] = useState(mockOrders)
  const [addresses, setAddresses] = useState(mockAddresses)

  // TODO: Implement with backend API calls
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updating profile:", user)
    // Backend call: PUT /api/user/profile
    toast("Your profile has been updated successfully.")
  }

  const handleAddAddress = () => {
    console.log("Adding new address")
    // Show add address form or modal
  }

  const handleDeleteAddress = (addressId: number) => {
    console.log("Deleting address:", addressId)
    // Backend call: DELETE /api/user/addresses/:id
    setAddresses(addresses.filter(addr => addr.id !== addressId))
  }

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "default"
      case "shipped":
        return "secondary"
      case "processing":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">
            <User className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="orders">
            <Package className="h-4 w-4 mr-2" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="addresses">
            <MapPin className="h-4 w-4 mr-2" />
            Addresses
          </TabsTrigger>
          <TabsTrigger value="payment">
            <CreditCard className="h-4 w-4 mr-2" />
            Payment
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdateProfile} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={user.name}
                      onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={user.phone}
                      onChange={(e) => setUser({ ...user, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Member Since</Label>
                    <Input
                      value={new Date(user.joinDate).toLocaleDateString()}
                      disabled
                    />
                  </div>
                </div>
                <Button type="submit">Update Profile</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>
                View your past orders and track current ones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Order #{order.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.date).toLocaleDateString()} • {order.items} items
                      </p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="font-medium">${order.total.toFixed(2)}</p>
                      <Badge variant={getStatusVariant(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
                {orders.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    No orders found. Start shopping to see your orders here.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="addresses">
          <Card>
            <CardHeader>
              <CardTitle>Saved Addresses</CardTitle>
              <CardDescription>
                Manage your shipping and billing addresses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {addresses.map((address) => (
                  <div key={address.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-medium">{address.type}</p>
                        {address.isDefault && (
                          <Badge variant="secondary" className="text-xs">Default</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {address.address}<br />
                        {address.city}, {address.state} {address.zipCode}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDeleteAddress(address.id)}
                        disabled={address.isDefault}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
                <Button onClick={handleAddAddress} className="w-full">
                  Add New Address
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>
                Manage your saved payment methods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <CreditCard className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No payment methods saved</h3>
                <p className="text-muted-foreground mb-6">
                  Add a payment method to make checkout faster and easier.
                </p>
                <Button>Add Payment Method</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}