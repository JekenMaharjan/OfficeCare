"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AdminLayout } from "@/components/admin/adminLayout"

// TODO: Replace with actual data from backend
const mockCustomers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 234 567 8900",
    totalOrders: 12,
    totalSpent: 2500.00,
    joinDate: "2024-01-15",
    status: "Active"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@email.com",
    phone: "+1 234 567 8901",
    totalOrders: 8,
    totalSpent: 1800.00,
    joinDate: "2024-02-20",
    status: "Active"
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@email.com",
    phone: "+1 234 567 8902",
    totalOrders: 5,
    totalSpent: 950.00,
    joinDate: "2024-03-10",
    status: "Inactive"
  }
]

export default function CustomersPage() {
  const [customers, setCustomers] = useState(mockCustomers)
  const [searchTerm, setSearchTerm] = useState("")

  // TODO: Implement with backend API calls
  const handleViewCustomer = (id: number) => {
    console.log("Viewing customer details:", id)
    // Navigate to customer detail page or open modal
  }

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

    return (
        <AdminLayout>
            <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-foreground">Customers</h1>
                <p className="text-muted-foreground">Manage your customer base</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{customers.length}</div>
                    <p className="text-xs text-muted-foreground">
                    +10% from last month
                    </p>
                </CardContent>
                </Card>

                <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                    {customers.filter(c => c.status === "Active").length}
                    </div>
                    <p className="text-xs text-muted-foreground">
                    {Math.round((customers.filter(c => c.status === "Active").length / customers.length) * 100)}% of total
                    </p>
                </CardContent>
                </Card>

                <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Average Spent</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                    ${(customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.length).toFixed(2)}
                    </div>
                    <p className="text-xs text-muted-foreground">
                    Per customer lifetime value
                    </p>
                </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                <CardTitle className="text-2xl">Customer List</CardTitle>
                <CardDescription>
                    View and manage all registered customers
                </CardDescription>
                <div className="flex items-center space-x-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <Input
                    placeholder="Search customers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                    />
                </div>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-gray-500">Customer</TableHead>
                            <TableHead className="text-gray-500">Contact</TableHead>
                            <TableHead className="text-gray-500">Orders</TableHead>
                            <TableHead className="text-gray-500">Total Spent</TableHead>
                            <TableHead className="text-gray-500">Join Date</TableHead>
                            <TableHead className="text-gray-500">Status</TableHead>
                            <TableHead className="text-gray-500">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredCustomers.map((customer) => (
                            <TableRow key={customer.id}>
                                <TableCell className="py-7">
                                    <div>
                                        <div className="font-medium">{customer.name}</div>
                                        <div className="text-sm text-muted-foreground">{customer.email}</div>
                                    </div>
                                </TableCell>
                                <TableCell>{customer.phone}</TableCell>
                                <TableCell>{customer.totalOrders}</TableCell>
                                <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
                                <TableCell>{new Date(customer.joinDate).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <Badge className={`bg-purple-600 hover:bg-purple-600/80 ${
                                        customer.status === "Inactive"
                                        ? "bg-gray-300 hover:bg-gray-300/80 text-black"
                                        : "bg-purple-600 hover:bg-purple-600/80"
                                    }`}>
                                    {customer.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Button
                                    variant="outline"
                                    size="sm"
                                    className="cursor-pointer"
                                    onClick={() => handleViewCustomer(customer.id)}
                                    >
                                    <Eye className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
            </div>
        </AdminLayout>
    )
}