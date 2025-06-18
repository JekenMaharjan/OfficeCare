"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, LogOut } from "lucide-react"

const Dashboard = () => {
  const handleSignOut = () => {
    // Clear any stored tokens/session data
    localStorage.removeItem("authToken")
    window.location.href = "/signin"
  }

  return (
    <div className="min-h-screen p-4" style={{ background: "linear-gradient(135deg, #fed7aa 0%, #dbeafe 100%)" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Office Care Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline" className="flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>

        {/* Welcome Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Welcome to Office Care!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              You have successfully signed in to your Office Care account. Here you can manage your profile, view
              orders, and browse our premium office appliances.
            </p>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Browse Products</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Explore our collection of premium office appliances</p>
              <Button className="w-full">View Products</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">My Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Track your current and past orders</p>
              <Button className="w-full" variant="outline">
                View Orders
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Update your profile and preferences</p>
              <Button className="w-full" variant="outline">
                Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
